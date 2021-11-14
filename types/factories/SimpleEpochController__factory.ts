/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleEpochController,
  SimpleEpochControllerInterface,
} from "../SimpleEpochController";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_epoch",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "allocateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allocator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
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
  {
    inputs: [],
    name: "epochLength",
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
  {
    inputs: [],
    name: "lastEpochTime",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "nextEpochAllocatedReward",
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
  {
    inputs: [],
    name: "nextEpochLength",
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
  {
    inputs: [],
    name: "nextEpochPoint",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_allocator",
        type: "address",
      },
    ],
    name: "setAllocator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805561012c60015534801561001a57600080fd5b5060048054336001600160a01b031991821681179092556003805490911690911790556106d98061004c6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461011d578063900cf0cf14610148578063aa5dcecc14610150578063bf83f2a214610163578063c5967c2614610176578063d673f4c31461017e57600080fd5b806307284ce9146100b957806313af4035146100d057806357d775f8146100e55780637effa5b6146100ee5780638554b0561461010157806389c614b814610114575b600080fd5b6001545b6040519081526020015b60405180910390f35b6100e36100de366004610598565b610187565b005b6100bd60015481565b6100bd6100fc366004610598565b6101dc565b6100e361010f366004610598565b6102d1565b6100bd60025481565b600454610130906001600160a01b031681565b6040516001600160a01b0390911681526020016100c7565b6000546100bd565b600354610130906001600160a01b031681565b6100e3610171366004610598565b6103fc565b6100bd610448565b6100bd60005481565b6004546001600160a01b031633146101ba5760405162461bcd60e51b81526004016101b1906105b5565b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600080826001600160a01b031663f7c618c16040518163ffffffff1660e01b815260040160206040518083038186803b15801561021857600080fd5b505afa15801561022c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025091906105ea565b6040516370a0823160e01b81523060048201529091506001600160a01b038216906370a082319060240160206040518083038186803b15801561029257600080fd5b505afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca9190610607565b9392505050565b6003546001600160a01b031633146102fb5760405162461bcd60e51b81526004016101b1906105b5565b6000610306826101dc565b90506000826001600160a01b031663f7c618c16040518163ffffffff1660e01b815260040160206040518083038186803b15801561034357600080fd5b505afa158015610357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037b91906105ea565b9050610388818484610465565b600054610396906001610620565b6000554260025560405163716e5b0b60e11b8152600481018390526001600160a01b0384169063e2dcb61690602401600060405180830381600087803b1580156103df57600080fd5b505af11580156103f3573d6000803e3d6000fd5b50505050505050565b6004546001600160a01b031633146104265760405162461bcd60e51b81526004016101b1906105b5565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600061045360015490565b6002546104609190610620565b905090565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b17905291516000928392908716916104c19190610646565b6000604051808303816000865af19150503d80600081146104fe576040519150601f19603f3d011682016040523d82523d6000602084013e610503565b606091505b509150915081801561052d57508051158061052d57508080602001905181019061052d9190610681565b6105795760405162461bcd60e51b815260206004820152601e60248201527f5472616e7366657248656c7065723a20415050524f56455f4641494c4544000060448201526064016101b1565b5050505050565b6001600160a01b038116811461059557600080fd5b50565b6000602082840312156105aa57600080fd5b81356102ca81610580565b6020808252818101527f53696d706c6545706f6368436f6e74726f6c6c65723a20464f5242494444454e604082015260600190565b6000602082840312156105fc57600080fd5b81516102ca81610580565b60006020828403121561061957600080fd5b5051919050565b6000821982111561064157634e487b7160e01b600052601160045260246000fd5b500190565b6000825160005b81811015610667576020818601810151858301520161064d565b81811115610676576000828501525b509190910192915050565b60006020828403121561069357600080fd5b815180151581146102ca57600080fdfea264697066735822122046d37c0985f058d9827f0fbbeec87607ce54587c9b7f495803bb4384888e6f9464736f6c63430008090033";

export class SimpleEpochController__factory extends ContractFactory {
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
  ): Promise<SimpleEpochController> {
    return super.deploy(overrides || {}) as Promise<SimpleEpochController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleEpochController {
    return super.attach(address) as SimpleEpochController;
  }
  connect(signer: Signer): SimpleEpochController__factory {
    return super.connect(signer) as SimpleEpochController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleEpochControllerInterface {
    return new utils.Interface(_abi) as SimpleEpochControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleEpochController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleEpochController;
  }
}
