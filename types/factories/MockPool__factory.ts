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
  "0x60c0604052670de0b6b3a764000060005534801561001c57600080fd5b50604051610f11380380610f1183398101604081905261003b916100bf565b6040516309b2760f60e01b81526001600160a01b038316906309b2760f90610067908490600401610109565b6020604051808303816000875af1158015610086573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100aa9190610131565b60a052506001600160a01b031660805261014a565b600080604083850312156100d257600080fd5b82516001600160a01b03811681146100e957600080fd5b6020840151909250600381106100fe57600080fd5b809150509250929050565b602081016003831061012b57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561014357600080fd5b5051919050565b60805160a051610d8761018a6000396000818160c50152818161021c01526102c201526000818161013d015281816101ef01526102950152610d876000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806301ec954a14610088578063267dc1f0146100ae57806338fff2d0146100c35780635f2b65f8146100e9578063641579a6146100fc57806374f3b0091461010f5780638d928af8146101305780639d2c110c14610167578063d5c096c41461017a575b600080fd5b61009b6100963660046107ae565b61018d565b6040519081526020015b60405180910390f35b6100c16100bc366004610885565b6101d8565b005b7f000000000000000000000000000000000000000000000000000000000000000061009b565b6100c16100f7366004610948565b61027e565b6100c161010a36600461097c565b600055565b61012261011d366004610995565b610321565b6040516100a5929190610a75565b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016100a5565b61009b610175366004610a9a565b61038b565b610122610188366004610995565b6103d5565b600080855160018111156101a3576101a3610ae7565b146101be5760005460608601516101b991610413565b6101cf565b60005460608601516101cf916104dd565b95945050505050565b604051633354e3e960e11b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906366a9c7d290610248907f00000000000000000000000000000000000000000000000000000000000000009086908690600401610b36565b600060405180830381600087803b15801561026257600080fd5b505af1158015610276573d6000803e3d6000fd5b505050505050565b604051633e9d75cb60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637d3aeb96906102ec907f0000000000000000000000000000000000000000000000000000000000000000908590600401610b9a565b600060405180830381600087803b15801561030657600080fd5b505af115801561031a573d6000803e3d6000fd5b5050505050565b6060807fd757d12f44d8d0b749520380aa9c4b9f37a744d90e601bd174de67345108f6c98989898989898960405161035f9796959493929190610bb3565b60405180910390a18280602001905181019061037b9190610c9f565b909a909950975050505050505050565b600080845160018111156103a1576103a1610ae7565b146103bc5760005460608501516103b791610413565b6103cd565b60005460608501516103cd916104dd565b949350505050565b6060807f7db7a909c113f809a4d01bf05f9f750c273333b7db84675206d198d4977146948989898989898960405161035f9796959493929190610bb3565b6000816104575760405162461bcd60e51b815260206004820152600d60248201526c2d22a927afa224ab24a9a4a7a760991b60448201526064015b60405180910390fd5b82610464575060006104d7565b6000610478670de0b6b3a764000085610d02565b9050670de0b6b3a764000061048d8583610d2f565b146104c95760405162461bcd60e51b815260206004820152600c60248201526b11125597d25395115493905360a21b604482015260640161044e565b6104d38382610d2f565b9150505b92915050565b6000806104ea8385610d02565b90508315806105015750826104ff8583610d2f565b145b61053c5760405162461bcd60e51b815260206004820152600c60248201526b4d554c5f4f564552464c4f5760a01b604482015260640161044e565b6104d3670de0b6b3a764000082610d2f565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b03811182821017156105875761058761054e565b60405290565b604051601f8201601f191681016001600160401b03811182821017156105b5576105b561054e565b604052919050565b8035600281106105cc57600080fd5b919050565b6001600160a01b03811681146105e657600080fd5b50565b80356105cc816105d1565b600082601f83011261060557600080fd5b81356001600160401b0381111561061e5761061e61054e565b610631601f8201601f191660200161058d565b81815284602083860101111561064657600080fd5b816020850160208301376000918101602001919091529392505050565b6000610120828403121561067657600080fd5b61067e610564565b9050610689826105bd565b8152610697602083016105e9565b60208201526106a8604083016105e9565b6040820152606082013560608201526080820135608082015260a082013560a08201526106d760c083016105e9565b60c08201526106e860e083016105e9565b60e0820152610100828101356001600160401b0381111561070857600080fd5b610714858286016105f4565b82840152505092915050565b60006001600160401b038211156107395761073961054e565b5060051b60200190565b600082601f83011261075457600080fd5b8135602061076961076483610720565b61058d565b82815260059290921b8401810191818101908684111561078857600080fd5b8286015b848110156107a3578035835291830191830161078c565b509695505050505050565b600080600080608085870312156107c457600080fd5b84356001600160401b03808211156107db57600080fd5b6107e788838901610663565b955060208701359150808211156107fd57600080fd5b5061080a87828801610743565b949794965050505060408301359260600135919050565b600082601f83011261083257600080fd5b8135602061084261076483610720565b82815260059290921b8401810191818101908684111561086157600080fd5b8286015b848110156107a3578035610878816105d1565b8352918301918301610865565b6000806040838503121561089857600080fd5b82356001600160401b03808211156108af57600080fd5b6108bb86838701610821565b93506020915081850135818111156108d257600080fd5b85019050601f810186136108e557600080fd5b80356108f361076482610720565b81815260059190911b8201830190838101908883111561091257600080fd5b928401925b8284101561093957833561092a816105d1565b82529284019290840190610917565b80955050505050509250929050565b60006020828403121561095a57600080fd5b81356001600160401b0381111561097057600080fd5b6104d384828501610821565b60006020828403121561098e57600080fd5b5035919050565b600080600080600080600060e0888a0312156109b057600080fd5b8735965060208801356109c2816105d1565b955060408801356109d2816105d1565b945060608801356001600160401b03808211156109ee57600080fd5b6109fa8b838c01610743565b955060808a0135945060a08a0135935060c08a0135915080821115610a1e57600080fd5b50610a2b8a828b016105f4565b91505092959891949750929550565b600081518084526020808501945080840160005b83811015610a6a57815187529582019590820190600101610a4e565b509495945050505050565b604081526000610a886040830185610a3a565b82810360208401526101cf8185610a3a565b600080600060608486031215610aaf57600080fd5b83356001600160401b03811115610ac557600080fd5b610ad186828701610663565b9660208601359650604090950135949350505050565b634e487b7160e01b600052602160045260246000fd5b600081518084526020808501945080840160005b83811015610a6a5781516001600160a01b031687529582019590820190600101610b11565b83815260006020606081840152610b506060840186610afd565b838103604085015284518082528286019183019060005b81811015610b8c5783516001600160a01b031683529284019291840191600101610b67565b509098975050505050505050565b8281526040602082015260006103cd6040830184610afd565b8781526000602060018060a01b03808a168285015280891660408501525060e06060840152610be560e0840188610a3a565b8660808501528560a085015283810360c0850152845180825260005b81811015610c1c578681018401518382018501528301610c01565b81811115610c2d5760008483850101525b50601f01601f191601019998505050505050505050565b600082601f830112610c5557600080fd5b81516020610c6561076483610720565b82815260059290921b84018101918181019086841115610c8457600080fd5b8286015b848110156107a35780518352918301918301610c88565b60008060408385031215610cb257600080fd5b82516001600160401b0380821115610cc957600080fd5b610cd586838701610c44565b93506020850151915080821115610ceb57600080fd5b50610cf885828601610c44565b9150509250929050565b6000816000190483118215151615610d2a57634e487b7160e01b600052601160045260246000fd5b500290565b600082610d4c57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122004e6a9014458b5a51d240513b227c5817c29449f9de28b3598b273fdf9b614bd64736f6c634300080a0033";

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
