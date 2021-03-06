/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  TemporarilyPausableVault,
  TemporarilyPausableVaultInterface,
} from "../TemporarilyPausableVault";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
    ],
    name: "PausedStateChangedVault",
    type: "event",
  },
  {
    inputs: [],
    name: "getPausedStateVault",
    outputs: [
      {
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "pauseWindowEndTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bufferPeriodEndTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class TemporarilyPausableVault__factory {
  static readonly abi = _abi;
  static createInterface(): TemporarilyPausableVaultInterface {
    return new utils.Interface(_abi) as TemporarilyPausableVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TemporarilyPausableVault {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TemporarilyPausableVault;
  }
}
