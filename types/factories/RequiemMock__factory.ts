/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RequiemMock, RequiemMockInterface } from "../RequiemMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isPair",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "setIsPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632410d8871461003b578063e5e31b1314610076575b600080fd5b6100746100493660046100c9565b6001600160a01b03919091166000908152602081905260409020805460ff1916911515919091179055565b005b610099610084366004610105565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b80356001600160a01b03811681146100c457600080fd5b919050565b600080604083850312156100dc57600080fd5b6100e5836100ad565b9150602083013580151581146100fa57600080fd5b809150509250929050565b60006020828403121561011757600080fd5b610120826100ad565b939250505056fea26469706673582212207ad9703376f8a2205270ab543147ba85274a6b82039f6dc23af0562411333e2464736f6c63430008090033";

export class RequiemMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiemMock> {
    return super.deploy(overrides || {}) as Promise<RequiemMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RequiemMock {
    return super.attach(address) as RequiemMock;
  }
  connect(signer: Signer): RequiemMock__factory {
    return super.connect(signer) as RequiemMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiemMockInterface {
    return new utils.Interface(_abi) as RequiemMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiemMock {
    return new Contract(address, _abi, signerOrProvider) as RequiemMock;
  }
}