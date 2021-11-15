// SPDX-License-Identifier: GPL-3.0-or-later
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.8.9;

import "./interfaces/IWETH.sol";

import "./interfaces/IAuthorizer.sol";
import "./libraries/SafeERC20.sol";
import "./VaultAuthorization.sol";
import "./Swaps.sol";
import "./libraries/SafeERC20.sol";
import "./interfaces/IFlashLoanRecipient.sol";

/**
 * @dev The `Vault` is the core contract. A single instance of it exists for the entire network, and it is the
 * entity used to interact with Pools by Liquidity Providers who join and exit them, Traders who swap, and Asset
 * Managers who withdraw and deposit tokens.
 *
 * The `Vault`'s source code is split among a number of sub-contracts, with the goal of improving readability and making
 * understanding the system easier. Most sub-contracts have been marked as `abstract` to explicitly indicate that only
 * the full `Vault` is meant to be deployed.
 *
 * Roughly speaking, these are the contents of each sub-contract:
 *
 *  - `AssetManagers`: Pool token Asset Manager registry, and Asset Manager interactions.
 *  - `Fees`: set and compute protocol fees.
 *  - `FlashLoans`: flash loan transfers and fees. - excluded here
 *  - `PoolBalances`: Pool joins and exits.
 *  - `PoolRegistry`: Pool registration, ID management, and basic queries.
 *  - `PoolTokens`: Pool token registration and registration, and balance queries.
 *  - `Swaps`: Pool swaps.
 *  - `UserBalance`: manage user balances (Internal Balance operations and external balance transfers)
 *  - `VaultAuthorization`: access control, relayers and signature validation.
 *
 * Additionally, the different Pool specializations are handled by the `GeneralPoolsBalance`,
 * `MinimalSwapInfoPoolsBalance` and `TwoTokenPoolsBalance` sub-contracts, which in turn make use of the
 * `BalanceAllocation` library.
 *
 * The most important goal of the `Vault` is to make token swaps use as little gas as possible. This is reflected in a
 * multitude of design decisions, from minor things like the format used to store Pool IDs, to major features such as
 * the different Pool specialization settings.
 *
 * Finally, the large number of tasks carried out by the Vault means its bytecode is very large, close to exceeding
 * the contract size limit imposed by EIP 170 (https://eips.ethereum.org/EIPS/eip-170). Manual tuning of the source code
 * was required to improve code generation and bring the bytecode size below this limit. This includes extensive
 * utilization of `internal` functions (particularly inside modifiers), usage of named return arguments, dedicated
 * storage access methods, dynamic revert reason generation, and usage of inline assembly, to name a few.
 */
contract RequiemVault is VaultAuthorization, Swaps {
    using SafeERC20 for IERC20;

    constructor(
        IAuthorizer authorizer,
        IWETH weth,
        uint256 pauseWindowDuration,
        uint256 bufferPeriodDuration
    ) VaultAuthorization(authorizer) AssetHelpers(weth) TemporarilyPausable(pauseWindowDuration, bufferPeriodDuration) {
        // solhint-disable-previous-line no-empty-blocks
    }

    function setPaused(bool paused) external override nonReentrant authenticate {
        _setPaused(paused);
    }

    // solhint-disable-next-line func-name-mixedcase
    function WETH() external view override returns (IWETH) {
        return _WETH();
    }

    function flashLoan(
        IFlashLoanRecipient recipient,
        IERC20[] memory tokens,
        uint256[] memory amounts,
        bytes memory userData
    ) external nonReentrant whenNotPaused {
        InputHelpers.ensureInputLengthMatch(tokens.length, amounts.length);

        uint256[] memory feeAmounts = new uint256[](tokens.length);
        uint256[] memory preLoanBalances = new uint256[](tokens.length);

        // Used to ensure `tokens` is sorted in ascending order, which ensures token uniqueness.
        IERC20 previousToken = IERC20(address(0));

        for (uint256 i = 0; i < tokens.length; ++i) {
            IERC20 token = tokens[i];
            uint256 amount = amounts[i];

            RequiemErrors._require(token > previousToken, token == IERC20(address(0)) ? Errors.ZERO_TOKEN : Errors.UNSORTED_TOKENS);
            previousToken = token;

            preLoanBalances[i] = token.balanceOf(address(this));
            feeAmounts[i] = _calculateFlashLoanFeeAmount(amount);

            RequiemErrors._require(preLoanBalances[i] >= amount, Errors.INSUFFICIENT_FLASH_LOAN_BALANCE);
            token.safeTransfer(address(recipient), amount);
        }

        recipient.receiveFlashLoan(tokens, amounts, feeAmounts, userData);

        for (uint256 i = 0; i < tokens.length; ++i) {
            IERC20 token = tokens[i];
            uint256 preLoanBalance = preLoanBalances[i];

            // Checking for loan repayment first (without accounting for fees) makes for simpler debugging, and results
            // in more accurate revert reasons if the flash loan protocol fee percentage is zero.
            uint256 postLoanBalance = token.balanceOf(address(this));
            RequiemErrors._require(postLoanBalance >= preLoanBalance, Errors.INVALID_POST_LOAN_BALANCE);

            // No need for checked arithmetic since we know the loan was fully repaid.
            uint256 receivedFeeAmount = postLoanBalance - preLoanBalance;
            RequiemErrors._require(receivedFeeAmount >= feeAmounts[i], Errors.INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT);

            _payFeeAmount(token, receivedFeeAmount);
            emit FlashLoan(recipient, token, amounts[i], receivedFeeAmount);
        }
    }
}
