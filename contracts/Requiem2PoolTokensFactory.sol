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

pragma solidity ^0.8.10;

import "./interfaces/IVault.sol";

import "./libraries/factories/BasePoolSplitCodeFactory.sol";
import "./interfaces/pool/IFormulaProvider.sol";
import "./libraries/factories/FactoryWidePauseWindow.sol";
import "./interfaces/pool/IRequiemWeightedMath.sol";
import "./Requiem2PoolTokens.sol";

contract Requiem2PoolTokensFactory is IFormulaProvider, BasePoolSplitCodeFactory, FactoryWidePauseWindow {
    address public formula;

    constructor(IVault vault, address _formula) BasePoolSplitCodeFactory(vault, type(Requiem2PoolTokens).creationCode) {
        formula = _formula;
    }

    /**
     * @dev Deploys a new `Requiem2PoolTokens`.
     */
    function create(
        string memory name,
        string memory symbol,
        IERC20[] memory tokens,
        uint256[] memory weights,
        uint256 swapFeePercentage,
        bool oracleEnabled,
        address owner
    ) external returns (address) {
        // TODO: Do not use arrays in the interface for tokens and weights

        (uint256 pauseWindowDuration, uint256 bufferPeriodDuration) = getPauseConfiguration();

        Requiem2PoolTokens.NewPoolParams memory params = Requiem2PoolTokens.NewPoolParams({
            vault: getVault(),
            name: name,
            symbol: symbol,
            token0: tokens[0],
            token1: tokens[1],
            normalizedWeight0: weights[0],
            normalizedWeight1: weights[1],
            swapFeePercentage: swapFeePercentage,
            pauseWindowDuration: pauseWindowDuration,
            bufferPeriodDuration: bufferPeriodDuration,
            oracleEnabled: oracleEnabled,
            owner: owner,
            factory: address(this)
        });

        return _create(abi.encode(params));
    }
}
