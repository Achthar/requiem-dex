/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakePoolRewardFund,
  StakePoolRewardFundInterface,
} from "../StakePoolRewardFund";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "allowRecoverRewardToken",
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
        name: "_stakePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "recoverAllRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "recoverRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakePool",
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
    name: "timelock",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610691806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063afb9d3ca1161005b578063afb9d3ca146100d2578063d1660f99146100e5578063d33219b4146100f8578063f8ea47561461012357600080fd5b80630c612694146100825780633468a5b814610097578063485cc955146100bf575b600080fd5b610095610090366004610554565b610136565b005b6100aa6100a5366004610590565b610216565b60405190151581526020015b60405180910390f35b6100956100cd3660046105b2565b61029a565b6100956100e03660046105b2565b610340565b6100956100f3366004610554565b6103c3565b60015461010b906001600160a01b031681565b6040516001600160a01b0390911681526020016100b6565b60005461010b906001600160a01b031681565b6001546001600160a01b031633146101955760405162461bcd60e51b815260206004820152601e60248201527f5374616b65506f6f6c52657761726446756e643a202174696d656c6f636b000060448201526064015b60405180910390fd5b61019e83610216565b6102065760405162461bcd60e51b815260206004820152603360248201527f5374616b65506f6f6c52657761726446756e643a206e6f7420616c6c6f77207260448201527232b1b7bb32b9103932bbb0b932103a37b5b2b760691b606482015260840161018c565b61021183838361041d565b505050565b6000805460405163068d14b760e31b81526001600160a01b03848116600483015290911690633468a5b89060240160206040518083038186803b15801561025c57600080fd5b505afa158015610270573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029491906105e5565b92915050565b600154600160a01b900460ff16156103055760405162461bcd60e51b815260206004820152602860248201527f5374616b65506f6f6c52657761726446756e643a20616c726561647920696e696044820152671d1a585b1a5e995960c21b606482015260840161018c565b600080546001600160a01b039384166001600160a01b0319909116179055600180546001600160a81b0319169190921617600160a01b179055565b6040516370a0823160e01b81523060048201526103bf90839083906001600160a01b038316906370a082319060240160206040518083038186803b15801561038757600080fd5b505afa15801561039b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100909190610607565b5050565b6000546001600160a01b031633146102065760405162461bcd60e51b815260206004820152601f60248201527f5374616b65506f6f6c52657761726446756e643a20217374616b65506f6f6c00604482015260640161018c565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916104799190610620565b6000604051808303816000865af19150503d80600081146104b6576040519150601f19603f3d011682016040523d82523d6000602084013e6104bb565b606091505b50915091508180156104e55750805115806104e55750808060200190518101906104e591906105e5565b6105315760405162461bcd60e51b815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015260640161018c565b5050505050565b80356001600160a01b038116811461054f57600080fd5b919050565b60008060006060848603121561056957600080fd5b61057284610538565b925061058060208501610538565b9150604084013590509250925092565b6000602082840312156105a257600080fd5b6105ab82610538565b9392505050565b600080604083850312156105c557600080fd5b6105ce83610538565b91506105dc60208401610538565b90509250929050565b6000602082840312156105f757600080fd5b815180151581146105ab57600080fd5b60006020828403121561061957600080fd5b5051919050565b6000825160005b818110156106415760208186018101518583015201610627565b81811115610650576000828501525b50919091019291505056fea26469706673582212203b87d8d6b62e65f918e6bd81d5685247201c5cf66c618054467ac54d03b7c7ae64736f6c63430008090033";

export class StakePoolRewardFund__factory extends ContractFactory {
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
  ): Promise<StakePoolRewardFund> {
    return super.deploy(overrides || {}) as Promise<StakePoolRewardFund>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StakePoolRewardFund {
    return super.attach(address) as StakePoolRewardFund;
  }
  connect(signer: Signer): StakePoolRewardFund__factory {
    return super.connect(signer) as StakePoolRewardFund__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakePoolRewardFundInterface {
    return new utils.Interface(_abi) as StakePoolRewardFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakePoolRewardFund {
    return new Contract(address, _abi, signerOrProvider) as StakePoolRewardFund;
  }
}
