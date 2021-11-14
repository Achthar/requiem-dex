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
import type { MockERC20, MockERC20Interface } from "../MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
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
        name: "amount",
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
        name: "account",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  "0x60806040523480156200001157600080fd5b5060405162000def38038062000def833981016040819052620000349162000317565b8251839083906200004d906003906020850190620001a4565b50805162000063906004906020840190620001a4565b505060058054601260ff199091161790555062000099336b033b2e3c9fd0803ce8000000620000bc602090811b6200044a17901c565b6005805460ff9092166101000261ff001990921691909117905550620004009050565b6001600160a01b038216620001175760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012b91906200039c565b90915550506001600160a01b038216600090815260208190526040812080548392906200015a9084906200039c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001b290620003c3565b90600052602060002090601f016020900481019282620001d6576000855562000221565b82601f10620001f157805160ff191683800117855562000221565b8280016001018555821562000221579182015b828111156200022157825182559160200191906001019062000204565b506200022f92915062000233565b5090565b5b808211156200022f576000815560010162000234565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027257600080fd5b81516001600160401b03808211156200028f576200028f6200024a565b604051601f8301601f19908116603f01168101908282118183101715620002ba57620002ba6200024a565b81604052838152602092508683858801011115620002d757600080fd5b600091505b83821015620002fb5785820183015181830184015290820190620002dc565b838211156200030d5760008385830101525b9695505050505050565b6000806000606084860312156200032d57600080fd5b83516001600160401b03808211156200034557600080fd5b620003538783880162000260565b945060208601519150808211156200036a57600080fd5b50620003798682870162000260565b925050604084015160ff811681146200039157600080fd5b809150509250925092565b60008219821115620003be57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620003d857607f821691505b60208210811415620003fa57634e487b7160e01b600052602260045260246000fd5b50919050565b6109df80620004106000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014f57806370a082311461016457806395d89b411461018d578063a457c2d714610195578063a9059cbb146101a8578063dd62ed3e146101bb57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461013c575b600080fd5b6100c16101f4565b6040516100ce919061081c565b60405180910390f35b6100ea6100e536600461088d565b610286565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a3660046108b7565b61029c565b600554610100900460ff1660405160ff90911681526020016100ce565b6100ea61014a36600461088d565b61034b565b61016261015d36600461088d565b610387565b005b6100fe6101723660046108f3565b6001600160a01b031660009081526020819052604090205490565b6100c1610395565b6100ea6101a336600461088d565b6103a4565b6100ea6101b636600461088d565b61043d565b6100fe6101c9366004610915565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020390610948565b80601f016020809104026020016040519081016040528092919081815260200182805461022f90610948565b801561027c5780601f106102515761010080835404028352916020019161027c565b820191906000526020600020905b81548152906001019060200180831161025f57829003601f168201915b5050505050905090565b6000610293338484610529565b50600192915050565b60006102a984848461064d565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103335760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103408533858403610529565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610293918590610382908690610983565b610529565b610391828261044a565b5050565b60606004805461020390610948565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161032a565b6104333385858403610529565b5060019392505050565b600061029333848461064d565b6001600160a01b0382166104a05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161032a565b80600260008282546104b29190610983565b90915550506001600160a01b038216600090815260208190526040812080548392906104df908490610983565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03831661058b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161032a565b6001600160a01b0382166105ec5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161032a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106b15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161032a565b6001600160a01b0382166107135760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161032a565b6001600160a01b0383166000908152602081905260409020548181101561078b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161032a565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107c2908490610983565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161080e91815260200190565b60405180910390a350505050565b600060208083528351808285015260005b818110156108495785810183015185820160400152820161082d565b8181111561085b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461088857600080fd5b919050565b600080604083850312156108a057600080fd5b6108a983610871565b946020939093013593505050565b6000806000606084860312156108cc57600080fd5b6108d584610871565b92506108e360208501610871565b9150604084013590509250925092565b60006020828403121561090557600080fd5b61090e82610871565b9392505050565b6000806040838503121561092857600080fd5b61093183610871565b915061093f60208401610871565b90509250929050565b600181811c9082168061095c57607f821691505b6020821081141561097d57634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156109a457634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212204821568774ba4c7c9a4fe369522fb32598fe7eded42057f1ae66aac081350d4164736f6c63430008090033";

export class MockERC20__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
