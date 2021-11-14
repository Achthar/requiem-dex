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
import type { MockPool, MockPoolInterface } from "../MockPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
      {
        internalType: "enum IVault.PoolSpecialization",
        name: "specialization",
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
        indexed: false,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "OnExitPoolCalled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "OnJoinPoolCalled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "deregisterTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolId",
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
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
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
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
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
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "onExitPool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "dueProtocolFeeAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
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
        internalType: "uint256[]",
        name: "currentBalances",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
    ],
    name: "onJoinPool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "dueProtocolFeeAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "lastChangeBlock",
            type: "uint256",
          },
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
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
        ],
        internalType: "struct IPoolSwapStructs.SwapRequest",
        name: "swapRequest",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "lastChangeBlock",
            type: "uint256",
          },
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
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
        ],
        internalType: "struct IPoolSwapStructs.SwapRequest",
        name: "swapRequest",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onSwap",
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
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "assetManagers",
        type: "address[]",
      },
    ],
    name: "registerTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMultiplier",
        type: "uint256",
      },
    ],
    name: "setMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052670de0b6b3a764000060005534801561001c57600080fd5b50604051610f3b380380610f3b83398101604081905261003b916100ce565b6040516309b2760f60e01b81526001600160a01b038316906309b2760f90610067908490600401610118565b602060405180830381600087803b15801561008157600080fd5b505af1158015610095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b99190610140565b60a052506001600160a01b0316608052610159565b600080604083850312156100e157600080fd5b82516001600160a01b03811681146100f857600080fd5b60208401519092506003811061010d57600080fd5b809150509250929050565b602081016003831061013a57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561015257600080fd5b5051919050565b60805160a051610da26101996000396000818160d50152818161022c01526102d201526000818161014d015281816101ff01526102a50152610da26000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063641579a611610066578063641579a61461010c57806374f3b0091461011f5780638d928af8146101405780639d2c110c14610177578063d5c096c41461018a57600080fd5b806301ec954a14610098578063267dc1f0146100be57806338fff2d0146100d35780635f2b65f8146100f9575b600080fd5b6100ab6100a63660046107c3565b61019d565b6040519081526020015b60405180910390f35b6100d16100cc36600461089b565b6101e8565b005b7f00000000000000000000000000000000000000000000000000000000000000006100ab565b6100d161010736600461095f565b61028e565b6100d161011a366004610994565b600055565b61013261012d3660046109ad565b610331565b6040516100b5929190610a8e565b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100b5565b6100ab610185366004610ab3565b61039b565b6101326101983660046109ad565b6103e5565b600080855160018111156101b3576101b3610b01565b146101ce5760005460608601516101c991610423565b6101df565b60005460608601516101df916104ed565b95945050505050565b604051633354e3e960e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906366a9c7d290610258907f00000000000000000000000000000000000000000000000000000000000000009086908690600401610b50565b600060405180830381600087803b15801561027257600080fd5b505af1158015610286573d6000803e3d6000fd5b505050505050565b604051633e9d75cb60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d3aeb96906102fc907f0000000000000000000000000000000000000000000000000000000000000000908590600401610bb4565b600060405180830381600087803b15801561031657600080fd5b505af115801561032a573d6000803e3d6000fd5b5050505050565b6060807fd757d12f44d8d0b749520380aa9c4b9f37a744d90e601bd174de67345108f6c98989898989898960405161036f9796959493929190610bcd565b60405180910390a18280602001905181019061038b9190610cb9565b909a909950975050505050505050565b600080845160018111156103b1576103b1610b01565b146103cc5760005460608501516103c791610423565b6103dd565b60005460608501516103dd916104ed565b949350505050565b6060807f7db7a909c113f809a4d01bf05f9f750c273333b7db84675206d198d4977146948989898989898960405161036f9796959493929190610bcd565b6000816104675760405162461bcd60e51b815260206004820152600d60248201526c2d22a927afa224ab24a9a4a7a760991b60448201526064015b60405180910390fd5b82610474575060006104e7565b6000610488670de0b6b3a764000085610d1d565b9050670de0b6b3a764000061049d8583610d4a565b146104d95760405162461bcd60e51b815260206004820152600c60248201526b11125597d25395115493905360a21b604482015260640161045e565b6104e38382610d4a565b9150505b92915050565b6000806104fa8385610d1d565b905083158061051157508261050f8583610d4a565b145b61054c5760405162461bcd60e51b815260206004820152600c60248201526b4d554c5f4f564552464c4f5760a01b604482015260640161045e565b6104e3670de0b6b3a764000082610d4a565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156105985761059861055e565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156105c7576105c761055e565b604052919050565b8035600281106105de57600080fd5b919050565b6001600160a01b03811681146105f857600080fd5b50565b80356105de816105e3565b600082601f83011261061757600080fd5b813567ffffffffffffffff8111156106315761063161055e565b610644601f8201601f191660200161059e565b81815284602083860101111561065957600080fd5b816020850160208301376000918101602001919091529392505050565b6000610120828403121561068957600080fd5b610691610574565b905061069c826105cf565b81526106aa602083016105fb565b60208201526106bb604083016105fb565b6040820152606082013560608201526080820135608082015260a082013560a08201526106ea60c083016105fb565b60c08201526106fb60e083016105fb565b60e08201526101008083013567ffffffffffffffff81111561071c57600080fd5b61072885828601610606565b82840152505092915050565b600067ffffffffffffffff82111561074e5761074e61055e565b5060051b60200190565b600082601f83011261076957600080fd5b8135602061077e61077983610734565b61059e565b82815260059290921b8401810191818101908684111561079d57600080fd5b8286015b848110156107b857803583529183019183016107a1565b509695505050505050565b600080600080608085870312156107d957600080fd5b843567ffffffffffffffff808211156107f157600080fd5b6107fd88838901610676565b9550602087013591508082111561081357600080fd5b5061082087828801610758565b949794965050505060408301359260600135919050565b600082601f83011261084857600080fd5b8135602061085861077983610734565b82815260059290921b8401810191818101908684111561087757600080fd5b8286015b848110156107b857803561088e816105e3565b835291830191830161087b565b600080604083850312156108ae57600080fd5b823567ffffffffffffffff808211156108c657600080fd5b6108d286838701610837565b93506020915081850135818111156108e957600080fd5b85019050601f810186136108fc57600080fd5b803561090a61077982610734565b81815260059190911b8201830190838101908883111561092957600080fd5b928401925b82841015610950578335610941816105e3565b8252928401929084019061092e565b80955050505050509250929050565b60006020828403121561097157600080fd5b813567ffffffffffffffff81111561098857600080fd5b6104e384828501610837565b6000602082840312156109a657600080fd5b5035919050565b600080600080600080600060e0888a0312156109c857600080fd5b8735965060208801356109da816105e3565b955060408801356109ea816105e3565b9450606088013567ffffffffffffffff80821115610a0757600080fd5b610a138b838c01610758565b955060808a0135945060a08a0135935060c08a0135915080821115610a3757600080fd5b50610a448a828b01610606565b91505092959891949750929550565b600081518084526020808501945080840160005b83811015610a8357815187529582019590820190600101610a67565b509495945050505050565b604081526000610aa16040830185610a53565b82810360208401526101df8185610a53565b600080600060608486031215610ac857600080fd5b833567ffffffffffffffff811115610adf57600080fd5b610aeb86828701610676565b9660208601359650604090950135949350505050565b634e487b7160e01b600052602160045260246000fd5b600081518084526020808501945080840160005b83811015610a835781516001600160a01b031687529582019590820190600101610b2b565b83815260006020606081840152610b6a6060840186610b17565b838103604085015284518082528286019183019060005b81811015610ba65783516001600160a01b031683529284019291840191600101610b81565b509098975050505050505050565b8281526040602082015260006103dd6040830184610b17565b8781526000602060018060a01b03808a168285015280891660408501525060e06060840152610bff60e0840188610a53565b8660808501528560a085015283810360c0850152845180825260005b81811015610c36578681018401518382018501528301610c1b565b81811115610c475760008483850101525b50601f01601f191601019998505050505050505050565b600082601f830112610c6f57600080fd5b81516020610c7f61077983610734565b82815260059290921b84018101918181019086841115610c9e57600080fd5b8286015b848110156107b85780518352918301918301610ca2565b60008060408385031215610ccc57600080fd5b825167ffffffffffffffff80821115610ce457600080fd5b610cf086838701610c5e565b93506020850151915080821115610d0657600080fd5b50610d1385828601610c5e565b9150509250929050565b6000816000190483118215151615610d4557634e487b7160e01b600052601160045260246000fd5b500290565b600082610d6757634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212202ba941775d5a4c2577385897f5615a3eebd84e2bdc52e33ad26a87f1a8a1c0da64736f6c63430008090033";

export class MockPool__factory extends ContractFactory {
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
    vault: string,
    specialization: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPool> {
    return super.deploy(
      vault,
      specialization,
      overrides || {}
    ) as Promise<MockPool>;
  }
  getDeployTransaction(
    vault: string,
    specialization: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(vault, specialization, overrides || {});
  }
  attach(address: string): MockPool {
    return super.attach(address) as MockPool;
  }
  connect(signer: Signer): MockPool__factory {
    return super.connect(signer) as MockPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPoolInterface {
    return new utils.Interface(_abi) as MockPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPool {
    return new Contract(address, _abi, signerOrProvider) as MockPool;
  }
}