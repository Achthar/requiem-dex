/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IStakePoolInterface extends ethers.utils.Interface {
  functions: {
    "addRewardPool(address,address,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "allowRecoverRewardToken(address)": FunctionFragment;
    "claimReward()": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "getAllRewards(address)": FunctionFragment;
    "getReward(uint8,address)": FunctionFragment;
    "getRewardMultiplier(uint8,uint256,uint256,uint256)": FunctionFragment;
    "getRewardPerSecond(uint8)": FunctionFragment;
    "getRewardRebase(uint8,address,uint256)": FunctionFragment;
    "getUserInfo(uint8,address)": FunctionFragment;
    "initialize(address,uint256,address,address)": FunctionFragment;
    "pendingReward(uint8,address)": FunctionFragment;
    "rewardPoolInfoLength()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFor(address)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "stopRewardPool(uint8)": FunctionFragment;
    "unfrozenStakeTime(address)": FunctionFragment;
    "updateReward(uint8)": FunctionFragment;
    "updateRewardMultiplier(uint8,address)": FunctionFragment;
    "updateRewardPool(uint8,uint256,uint256)": FunctionFragment;
    "updateRewardRebaser(uint8,address)": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRewardPool",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "allowRecoverRewardToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardMultiplier",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardRebase",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPoolInfoLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakeFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopRewardPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unfrozenStakeTime",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardMultiplier",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardPool",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewardRebaser",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowRecoverRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRewardMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardRebase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPoolInfoLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stopRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfrozenStakeTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRewardRebaser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AddRewardPool(uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "PayRewardPool(uint256,address,address,uint256,uint256,uint256)": EventFragment;
    "UpdateRewardMultiplier(uint256,address)": EventFragment;
    "UpdateRewardPool(uint256,uint256,uint256)": EventFragment;
    "UpdateRewardRebaser(uint256,address)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddRewardPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayRewardPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateRewardMultiplier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateRewardPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateRewardRebaser"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AddRewardPoolEvent = TypedEvent<
  [BigNumber] & { poolId: BigNumber }
>;

export type DepositEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type PayRewardPoolEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, BigNumber] & {
    poolId: BigNumber;
    rewardToken: string;
    account: string;
    pendingReward: BigNumber;
    rebaseAmount: BigNumber;
    paidReward: BigNumber;
  }
>;

export type UpdateRewardMultiplierEvent = TypedEvent<
  [BigNumber, string] & { poolId: BigNumber; rewardMultiplier: string }
>;

export type UpdateRewardPoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    poolId: BigNumber;
    endRewardTime: BigNumber;
    rewardPerSecond: BigNumber;
  }
>;

export type UpdateRewardRebaserEvent = TypedEvent<
  [BigNumber, string] & { poolId: BigNumber; rewardRebaser: string }
>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export class IStakePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IStakePoolInterface;

  functions: {
    addRewardPool(
      _rewardToken: string,
      _rewardRebaser: string,
      _rewardMultiplier: string,
      _startTime: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      _lockRewardPercent: BigNumberish,
      _startVestingTime: BigNumberish,
      _endVestingTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllRewards(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardMultiplier(
      _pid: BigNumberish,
      _from: BigNumberish,
      _to: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardPerSecond(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardRebase(
      _pid: BigNumberish,
      _rewardToken: string,
      _pendingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserInfo(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        accumulatedEarned: BigNumber;
        lockReward: BigNumber;
        lockRewardReleased: BigNumber;
      }
    >;

    initialize(
      _stakeToken: string,
      _unstakingFrozenTime: BigNumberish,
      _rewardFund: string,
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardPoolInfoLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<[string]>;

    stopRewardPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unfrozenStakeTime(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "updateReward(uint8)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewardMultiplier(
      _pid: BigNumberish,
      _rewardMultiplier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewardPool(
      _pid: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRewardRebaser(
      _pid: BigNumberish,
      _rewardRebaser: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addRewardPool(
    _rewardToken: string,
    _rewardRebaser: string,
    _rewardMultiplier: string,
    _startTime: BigNumberish,
    _endRewardTime: BigNumberish,
    _rewardPerSecond: BigNumberish,
    _lockRewardPercent: BigNumberish,
    _startVestingTime: BigNumberish,
    _endVestingTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowRecoverRewardToken(
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllRewards(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getReward(
    _pid: BigNumberish,
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardMultiplier(
    _pid: BigNumberish,
    _from: BigNumberish,
    _to: BigNumberish,
    _rewardPerSecond: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardPerSecond(
    pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardRebase(
    _pid: BigNumberish,
    _rewardToken: string,
    _pendingReward: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserInfo(
    _pid: BigNumberish,
    _account: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      rewardDebt: BigNumber;
      accumulatedEarned: BigNumber;
      lockReward: BigNumber;
      lockRewardReleased: BigNumber;
    }
  >;

  initialize(
    _stakeToken: string,
    _unstakingFrozenTime: BigNumberish,
    _rewardFund: string,
    _timelock: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingReward(
    _pid: BigNumberish,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardPoolInfoLength(overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeFor(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  stopRewardPool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unfrozenStakeTime(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "updateReward(uint8)"(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateReward()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewardMultiplier(
    _pid: BigNumberish,
    _rewardMultiplier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewardPool(
    _pid: BigNumberish,
    _endRewardTime: BigNumberish,
    _rewardPerSecond: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRewardRebaser(
    _pid: BigNumberish,
    _rewardRebaser: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRewardPool(
      _rewardToken: string,
      _rewardRebaser: string,
      _rewardMultiplier: string,
      _startTime: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      _lockRewardPercent: BigNumberish,
      _startVestingTime: BigNumberish,
      _endVestingTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimReward(overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    getAllRewards(_account: string, overrides?: CallOverrides): Promise<void>;

    getReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardMultiplier(
      _pid: BigNumberish,
      _from: BigNumberish,
      _to: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerSecond(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardRebase(
      _pid: BigNumberish,
      _rewardToken: string,
      _pendingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserInfo(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        rewardDebt: BigNumber;
        accumulatedEarned: BigNumber;
        lockReward: BigNumber;
        lockRewardReleased: BigNumber;
      }
    >;

    initialize(
      _stakeToken: string,
      _unstakingFrozenTime: BigNumberish,
      _rewardFund: string,
      _timelock: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPoolInfoLength(overrides?: CallOverrides): Promise<BigNumber>;

    stake(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFor(_account: string, overrides?: CallOverrides): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    stopRewardPool(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unfrozenStakeTime(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateReward(uint8)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateReward()"(overrides?: CallOverrides): Promise<void>;

    updateRewardMultiplier(
      _pid: BigNumberish,
      _rewardMultiplier: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardPool(
      _pid: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewardRebaser(
      _pid: BigNumberish,
      _rewardRebaser: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AddRewardPool(uint256)"(
      poolId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { poolId: BigNumber }>;

    AddRewardPool(
      poolId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { poolId: BigNumber }>;

    "Deposit(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    Deposit(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "PayRewardPool(uint256,address,address,uint256,uint256,uint256)"(
      poolId?: BigNumberish | null,
      rewardToken?: string | null,
      account?: string | null,
      pendingReward?: null,
      rebaseAmount?: null,
      paidReward?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber, BigNumber],
      {
        poolId: BigNumber;
        rewardToken: string;
        account: string;
        pendingReward: BigNumber;
        rebaseAmount: BigNumber;
        paidReward: BigNumber;
      }
    >;

    PayRewardPool(
      poolId?: BigNumberish | null,
      rewardToken?: string | null,
      account?: string | null,
      pendingReward?: null,
      rebaseAmount?: null,
      paidReward?: null
    ): TypedEventFilter<
      [BigNumber, string, string, BigNumber, BigNumber, BigNumber],
      {
        poolId: BigNumber;
        rewardToken: string;
        account: string;
        pendingReward: BigNumber;
        rebaseAmount: BigNumber;
        paidReward: BigNumber;
      }
    >;

    "UpdateRewardMultiplier(uint256,address)"(
      poolId?: BigNumberish | null,
      rewardMultiplier?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { poolId: BigNumber; rewardMultiplier: string }
    >;

    UpdateRewardMultiplier(
      poolId?: BigNumberish | null,
      rewardMultiplier?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { poolId: BigNumber; rewardMultiplier: string }
    >;

    "UpdateRewardPool(uint256,uint256,uint256)"(
      poolId?: BigNumberish | null,
      endRewardTime?: null,
      rewardPerSecond?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        poolId: BigNumber;
        endRewardTime: BigNumber;
        rewardPerSecond: BigNumber;
      }
    >;

    UpdateRewardPool(
      poolId?: BigNumberish | null,
      endRewardTime?: null,
      rewardPerSecond?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        poolId: BigNumber;
        endRewardTime: BigNumber;
        rewardPerSecond: BigNumber;
      }
    >;

    "UpdateRewardRebaser(uint256,address)"(
      poolId?: BigNumberish | null,
      rewardRebaser?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { poolId: BigNumber; rewardRebaser: string }
    >;

    UpdateRewardRebaser(
      poolId?: BigNumberish | null,
      rewardRebaser?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { poolId: BigNumber; rewardRebaser: string }
    >;

    "Withdraw(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    Withdraw(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    addRewardPool(
      _rewardToken: string,
      _rewardRebaser: string,
      _rewardMultiplier: string,
      _startTime: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      _lockRewardPercent: BigNumberish,
      _startVestingTime: BigNumberish,
      _endVestingTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllRewards(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardMultiplier(
      _pid: BigNumberish,
      _from: BigNumberish,
      _to: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerSecond(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardRebase(
      _pid: BigNumberish,
      _rewardToken: string,
      _pendingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserInfo(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _stakeToken: string,
      _unstakingFrozenTime: BigNumberish,
      _rewardFund: string,
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardPoolInfoLength(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    stopRewardPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unfrozenStakeTime(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateReward(uint8)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewardMultiplier(
      _pid: BigNumberish,
      _rewardMultiplier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewardPool(
      _pid: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRewardRebaser(
      _pid: BigNumberish,
      _rewardRebaser: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRewardPool(
      _rewardToken: string,
      _rewardRebaser: string,
      _rewardMultiplier: string,
      _startTime: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      _lockRewardPercent: BigNumberish,
      _startVestingTime: BigNumberish,
      _endVestingTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllRewards(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardMultiplier(
      _pid: BigNumberish,
      _from: BigNumberish,
      _to: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardPerSecond(
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardRebase(
      _pid: BigNumberish,
      _rewardToken: string,
      _pendingReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserInfo(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _stakeToken: string,
      _unstakingFrozenTime: BigNumberish,
      _rewardFund: string,
      _timelock: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingReward(
      _pid: BigNumberish,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPoolInfoLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stopRewardPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unfrozenStakeTime(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "updateReward(uint8)"(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateReward()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardMultiplier(
      _pid: BigNumberish,
      _rewardMultiplier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardPool(
      _pid: BigNumberish,
      _endRewardTime: BigNumberish,
      _rewardPerSecond: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRewardRebaser(
      _pid: BigNumberish,
      _rewardRebaser: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
