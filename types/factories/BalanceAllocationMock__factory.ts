/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalanceAllocationMock,
  BalanceAllocationMockInterface,
} from "../BalanceAllocationMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "cash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "cashToManaged",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseCash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sharedCash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sharedManaged",
        type: "bytes32",
      },
    ],
    name: "fromSharedToBalanceA",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sharedCash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sharedManaged",
        type: "bytes32",
      },
    ],
    name: "fromSharedToBalanceB",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseCash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "isNotZero",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "isZero",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "lastChangeBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "managed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "managedToCash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newManaged",
        type: "uint256",
      },
    ],
    name: "setManaged",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_managed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lastChangeBlock",
        type: "uint256",
      },
    ],
    name: "toBalance",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenABalance",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tokenBBalance",
        type: "bytes32",
      },
    ],
    name: "toSharedCash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenABalance",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "tokenBBalance",
        type: "bytes32",
      },
    ],
    name: "toSharedManaged",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "balance",
        type: "bytes32",
      },
    ],
    name: "total",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "balances",
        type: "bytes32[]",
      },
    ],
    name: "totals",
    outputs: [
      {
        internalType: "uint256[]",
        name: "result",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108a9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100db5760003560e01c8063256da630146100e05780633a1f6e15146101065780633f7e18a5146101295780634ca27dff1461013c57806351b311f01461014f578063595e098a146101625780637171e37f146101755780637323e7ca14610188578063736ea8321461019b57806393b9de4c146101ae578063a44bed62146101c1578063ac0177a9146101d4578063ce833077146101ae578063d6c752c5146101e7578063dd64691714610207578063e1ac20221461021a578063fba56f521461022d575b600080fd5b6100f36100ee36600461067f565b610240565b6040519081526020015b60405180910390f35b6101196101143660046106a1565b610253565b60405190151581526020016100fd565b6100f36101373660046106a1565b610264565b6100f361014a3660046106a1565b610270565b6100f361015d36600461067f565b61027b565b6100f361017036600461067f565b610287565b6100f361018336600461067f565b610293565b6100f361019636600461067f565b61029f565b6100f36101a936600461067f565b6102ab565b6100f36101bc36600461067f565b6102b7565b6100f36101cf3660046106a1565b6102c3565b6100f36101e236600461067f565b6102ce565b6101fa6101f53660046106d0565b6102da565b6040516100fd919061078d565b6101196102153660046106a1565b6102ec565b6100f36102283660046107d1565b6102f7565b6100f361023b3660046106a1565b61030c565b600061024c8383610317565b9392505050565b600061025e8261036b565b92915050565b600061025e8260e01c90565b600061025e8261037d565b600061024c838361038c565b600061024c83836103b2565b600061024c83836103f4565b600061024c8383610423565b600061024c8383610441565b600061024c8383610464565b600061025e82610496565b600061024c83836104a2565b60606102e5826104b9565b5092915050565b600061025e82610581565b600061030484848461058e565b949350505050565b600061025e826105c6565b6000808261032485610496565b61032e9190610813565b905060008361033c8661037d565b6103469190610813565b905060006103548660e01c90565b905061036183838361058e565b9695505050505050565b600061037682610581565b1592915050565b60701c6001600160701b031690565b600061024c61039a8461037d565b6103a38461037d565b6103ad8660e01c90565b61058e565b6000806103d16103c28560e01c90565b6103cc8560e01c90565b6105e4565b90506103046103df85610496565b6103e885610496565b8363ffffffff166105fb565b6000808261040185610496565b61040b9190610813565b90506000836104198661037d565b610346919061082b565b600061024c6104318461037d565b61043a8461037d565b60006105fb565b60008061044d84610496565b90504361045b82858361058e565b95945050505050565b6000808261047185610496565b61047b9190610813565b905060006104888561037d565b90504361036183838361058e565b6001600160701b031690565b600061024c6104b084610496565b6103a384610496565b6060600082516001600160401b038111156104d6576104d66106ba565b6040519080825280602002602001820160405280156104ff578160200160208202803683370190505b5091506000905060005b825181101561057b57600084828151811061052657610526610842565b60200260200101519050610539816105c6565b84838151811061054b5761054b610842565b602002602001018181525050610565836103cc8360e01c90565b925050808061057390610858565b915050610509565b50915091565b6001600160e01b03161590565b60008061059b8486610813565b90506105bb8582101580156105b35750600160701b82105b61020e61061a565b61045b8585856105fb565b60006105d18261037d565b6105da83610496565b61025e9190610813565b6000818310156105f4578161024c565b5090919050565b600083610610607085901b60e085901b610813565b6103049190610813565b81610628576106288161062c565b5050565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6000806040838503121561069257600080fd5b50508035926020909101359150565b6000602082840312156106b357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156106e357600080fd5b82356001600160401b03808211156106fa57600080fd5b818501915085601f83011261070e57600080fd5b813581811115610720576107206106ba565b8060051b604051601f19603f83011681018181108582111715610745576107456106ba565b60405291825284820192508381018501918883111561076357600080fd5b938501935b8285101561078157843584529385019392850192610768565b98975050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156107c5578351835292840192918401916001016107a9565b50909695505050505050565b6000806000606084860312156107e657600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610826576108266107fd565b500190565b60008282101561083d5761083d6107fd565b500390565b634e487b7160e01b600052603260045260246000fd5b600060001982141561086c5761086c6107fd565b506001019056fea2646970667358221220c8a3f14d37ef795a3fd7c53d1f9858c126332f6c338a9e5bbcd8fac49073aa0764736f6c634300080a0033";

export class BalanceAllocationMock__factory extends ContractFactory {
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
  ): Promise<BalanceAllocationMock> {
    return super.deploy(overrides || {}) as Promise<BalanceAllocationMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalanceAllocationMock {
    return super.attach(address) as BalanceAllocationMock;
  }
  connect(signer: Signer): BalanceAllocationMock__factory {
    return super.connect(signer) as BalanceAllocationMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalanceAllocationMockInterface {
    return new utils.Interface(_abi) as BalanceAllocationMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceAllocationMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BalanceAllocationMock;
  }
}
