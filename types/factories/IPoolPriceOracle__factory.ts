/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPoolPriceOracle,
  IPoolPriceOracleInterface,
} from "../IPoolPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSample",
    outputs: [
      {
        internalType: "int256",
        name: "logPairPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogPairPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "logBptPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogBptPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "logInvariant",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "accLogInvariant",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSamples",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPoolPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolPriceOracleInterface {
    return new utils.Interface(_abi) as IPoolPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IPoolPriceOracle;
  }
}
