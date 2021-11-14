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
pragma experimental ABIEncoderV2;

import "./ISignaturesValidatorVault.sol";
import "../libraries/helpers/IAuthentication.sol";
import "./ITemporarilyPausableVault.sol";
import "./IAuthorizer.sol";

interface IVaultAuthorizer is IAuthentication, ISignaturesValidatorVault, ITemporarilyPausableVault {
    function setAuthorizer(IAuthorizer newAuthorizer) external;

    function getAuthorizer() external view returns (IAuthorizer);

    function setRelayerApproval(
        address sender,
        address relayer,
        bool approved
    ) external;

    function _authenticateFor(address user) external;

    function hasApprovedRelayer(address user, address relayer) external view returns (bool);

    // function _canPerform(bytes32 actionId, address user) external view returns (bool);

    // function _typeHash() external pure returns (bytes32 hash);
}
