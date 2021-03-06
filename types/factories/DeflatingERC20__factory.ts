/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeflatingERC20,
  DeflatingERC20Interface,
} from "../DeflatingERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [],
    name: "PERMIT_TYPEHASH",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610bcc380380610bcc83398101604081905261002f916101b7565b604080518082018252601481527f4465666c6174696e67205465737420546f6b656e0000000000000000000000006020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527ff89e31130e6fd3d87d62a1ac2770fba58bed5a06c47ce70fa97f8218b1b2743a818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015246608082018190523060a0808401919091528451808403909101815260c0909201909352805191012060035561011f3383610126565b50506101f6565b8060005461013491906101d0565b60009081556001600160a01b03831681526001602052604090205461015a9082906101d0565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906101ab9085815260200190565b60405180910390a35050565b6000602082840312156101c957600080fd5b5051919050565b600082198211156101f157634e487b7160e01b600052601160045260246000fd5b500190565b6109c7806102056000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806306fdde03146100bf578063095ea7b31461010857806318160ddd1461012b57806323b872dd1461014257806330adf81f14610155578063313ce5671461016a5780633644e5151461018457806340c10f191461018d57806370a08231146101a05780637ecebe00146101c057806395d89b41146101e0578063a9059cbb14610202578063d505accf14610215578063dd62ed3e1461022a575b600080fd5b6100f2604051806040016040528060148152602001732232b33630ba34b733902a32b9ba102a37b5b2b760611b81525081565b6040516100ff9190610730565b60405180910390f35b61011b6101163660046107a1565b610255565b60405190151581526020016100ff565b61013460005481565b6040519081526020016100ff565b61011b6101503660046107cb565b61026b565b61013460008051602061097283398151915281565b610172601281565b60405160ff90911681526020016100ff565b61013460035481565b61011b61019b3660046107a1565b610300565b6101346101ae366004610807565b60016020526000908152604090205481565b6101346101ce366004610807565b60046020526000908152604090205481565b6100f26040518060400160405280600381526020016211151560ea1b81525081565b61011b6102103660046107a1565b61030c565b610228610223366004610829565b610319565b005b61013461023836600461089c565b600260209081526000928352604080842090915290825290205481565b6000610262338484610509565b50600192915050565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146102eb576001600160a01b03841660009081526002602090815260408083203384529091529020546102c69083906108e5565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6102f684848461056a565b5060019392505050565b60006102628383610637565b600061026233848461056a565b428410156103585760405162461bcd60e51b81526020600482015260076024820152661156141254915160ca1b60448201526064015b60405180910390fd5b6003546001600160a01b03881660009081526004602052604081208054919291600080516020610972833981519152918b918b918b919087610399836108fc565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161041292919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561047d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906104b35750886001600160a01b0316816001600160a01b0316145b6104f35760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015260640161034f565b6104fe898989610509565b505050505050505050565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610577606483610917565b905061058384826106b6565b600061058f82846108e5565b6001600160a01b0386166000908152600160205260409020549091506105b69082906108e5565b6001600160a01b0380871660009081526001602052604080822093909355908616815220546105e6908290610939565b6001600160a01b038086166000818152600160205260409081902093909355915190871690600080516020610952833981519152906106289085815260200190565b60405180910390a35050505050565b806000546106459190610939565b60009081556001600160a01b03831681526001602052604090205461066b908290610939565b6001600160a01b038316600081815260016020526040808220939093559151909190600080516020610952833981519152906106aa9085815260200190565b60405180910390a35050565b6001600160a01b0382166000908152600160205260409020546106da9082906108e5565b6001600160a01b038316600090815260016020526040812091909155546107029082906108e5565b60009081556040518281526001600160a01b03841690600080516020610952833981519152906020016106aa565b600060208083528351808285015260005b8181101561075d57858101830151858201604001528201610741565b8181111561076f576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461079c57600080fd5b919050565b600080604083850312156107b457600080fd5b6107bd83610785565b946020939093013593505050565b6000806000606084860312156107e057600080fd5b6107e984610785565b92506107f760208501610785565b9150604084013590509250925092565b60006020828403121561081957600080fd5b61082282610785565b9392505050565b600080600080600080600060e0888a03121561084457600080fd5b61084d88610785565b965061085b60208901610785565b95506040880135945060608801359350608088013560ff8116811461087f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156108af57600080fd5b6108b883610785565b91506108c660208401610785565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b6000828210156108f7576108f76108cf565b500390565b6000600019821415610910576109106108cf565b5060010190565b60008261093457634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561094c5761094c6108cf565b50019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9a2646970667358221220dc0e20bfb6fa48ee3e7db8192fdab2591beda11d78de02002c1a48c22d25c4ae64736f6c634300080a0033";

export class DeflatingERC20__factory extends ContractFactory {
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
    _totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeflatingERC20> {
    return super.deploy(
      _totalSupply,
      overrides || {}
    ) as Promise<DeflatingERC20>;
  }
  getDeployTransaction(
    _totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totalSupply, overrides || {});
  }
  attach(address: string): DeflatingERC20 {
    return super.attach(address) as DeflatingERC20;
  }
  connect(signer: Signer): DeflatingERC20__factory {
    return super.connect(signer) as DeflatingERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeflatingERC20Interface {
    return new utils.Interface(_abi) as DeflatingERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeflatingERC20 {
    return new Contract(address, _abi, signerOrProvider) as DeflatingERC20;
  }
}
