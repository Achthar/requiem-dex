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

interface StakePoolEpochRewardInterface extends ethers.utils.Interface {
  functions: {
    "BLOCKS_PER_DAY()": FunctionFragment;
    "allocateReward(uint256)": FunctionFragment;
    "allowRecoverRewardToken(address)": FunctionFragment;
    "balance()": FunctionFragment;
    "canClaimReward(address)": FunctionFragment;
    "canWithdraw(address)": FunctionFragment;
    "claimReward()": FunctionFragment;
    "controller()": FunctionFragment;
    "earned(address)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "epoch()": FunctionFragment;
    "epochController()": FunctionFragment;
    "exit()": FunctionFragment;
    "getLastSnapshotIndexOf(address)": FunctionFragment;
    "initialize(address,address,address,address,address,uint256,uint256)": FunctionFragment;
    "latestSnapshotIndex()": FunctionFragment;
    "nextEpochAllocatedReward()": FunctionFragment;
    "nextEpochLength()": FunctionFragment;
    "nextEpochPoint()": FunctionFragment;
    "rewardFund()": FunctionFragment;
    "rewardLockupEpochs()": FunctionFragment;
    "rewardPerShare()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setEpochController(address)": FunctionFragment;
    "setLockUp(uint256,uint256)": FunctionFragment;
    "snapshotHistory(uint256)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeFor(address)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "timelock()": FunctionFragment;
    "unlockRewardEpoch(address)": FunctionFragment;
    "unlockWithdrawEpoch(address)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawLockupEpochs()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BLOCKS_PER_DAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocateReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowRecoverRewardToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canClaimReward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "canWithdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "epochController",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLastSnapshotIndexOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestSnapshotIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextEpochAllocatedReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextEpochLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextEpochPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardLockupEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEpochController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockUp",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "snapshotHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakeFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unlockRewardEpoch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockWithdrawEpoch",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLockupEpochs",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BLOCKS_PER_DAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowRecoverRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canClaimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLastSnapshotIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestSnapshotIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochAllocatedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardLockupEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEpochController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLockUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "snapshotHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockRewardEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockWithdrawEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLockupEpochs",
    data: BytesLike
  ): Result;

  events: {
    "AllocateReward(uint256,uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "PayRewardPool(uint256,address,address,uint256,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllocateReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayRewardPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AllocateRewardEvent = TypedEvent<
  [BigNumber, BigNumber] & { blocktime: BigNumber; amount: BigNumber }
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

export type WithdrawEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export class StakePoolEpochReward extends BaseContract {
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

  interface: StakePoolEpochRewardInterface;

  functions: {
    BLOCKS_PER_DAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    allocateReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    canClaimReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canWithdraw(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    earned(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochController(overrides?: CallOverrides): Promise<[string]>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastSnapshotIndexOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _stakeToken: string,
      _rewardFund: string,
      _timelock: string,
      _epochController: string,
      _rewardToken: string,
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextEpochAllocatedReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextEpochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextEpochPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardFund(overrides?: CallOverrides): Promise<[string]>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setEpochController(
      _epochController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    snapshotHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        time: BigNumber;
        rewardReceived: BigNumber;
        rewardPerShare: BigNumber;
      }
    >;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<[string]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    unlockRewardEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unlockWithdrawEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastSnapshotIndex: BigNumber;
        rewardEarned: BigNumber;
        epochTimerStart: BigNumber;
      }
    >;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BLOCKS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

  allocateReward(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowRecoverRewardToken(
    _token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  canClaimReward(_account: string, overrides?: CallOverrides): Promise<boolean>;

  canWithdraw(_account: string, overrides?: CallOverrides): Promise<boolean>;

  claimReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  emergencyWithdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  epochController(overrides?: CallOverrides): Promise<string>;

  exit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastSnapshotIndexOf(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _stakeToken: string,
    _rewardFund: string,
    _timelock: string,
    _epochController: string,
    _rewardToken: string,
    _withdrawLockupEpochs: BigNumberish,
    _rewardLockupEpochs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

  nextEpochAllocatedReward(overrides?: CallOverrides): Promise<BigNumber>;

  nextEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

  nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

  rewardFund(overrides?: CallOverrides): Promise<string>;

  rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setEpochController(
    _epochController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLockUp(
    _withdrawLockupEpochs: BigNumberish,
    _rewardLockupEpochs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  snapshotHistory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      time: BigNumber;
      rewardReceived: BigNumber;
      rewardPerShare: BigNumber;
    }
  >;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeFor(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  timelock(overrides?: CallOverrides): Promise<string>;

  unlockRewardEpoch(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unlockWithdrawEpoch(
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      amount: BigNumber;
      lastSnapshotIndex: BigNumber;
      rewardEarned: BigNumber;
      epochTimerStart: BigNumber;
    }
  >;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BLOCKS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

    allocateReward(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    canClaimReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canWithdraw(_account: string, overrides?: CallOverrides): Promise<boolean>;

    claimReward(overrides?: CallOverrides): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    epochController(overrides?: CallOverrides): Promise<string>;

    exit(overrides?: CallOverrides): Promise<void>;

    getLastSnapshotIndexOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _stakeToken: string,
      _rewardFund: string,
      _timelock: string,
      _epochController: string,
      _rewardToken: string,
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochAllocatedReward(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    rewardFund(overrides?: CallOverrides): Promise<string>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setEpochController(
      _epochController: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    snapshotHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        time: BigNumber;
        rewardReceived: BigNumber;
        rewardPerShare: BigNumber;
      }
    >;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeFor(_account: string, overrides?: CallOverrides): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    timelock(overrides?: CallOverrides): Promise<string>;

    unlockRewardEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockWithdrawEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        amount: BigNumber;
        lastSnapshotIndex: BigNumber;
        rewardEarned: BigNumber;
        epochTimerStart: BigNumber;
      }
    >;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AllocateReward(uint256,uint256)"(
      blocktime?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { blocktime: BigNumber; amount: BigNumber }
    >;

    AllocateReward(
      blocktime?: null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { blocktime: BigNumber; amount: BigNumber }
    >;

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
    BLOCKS_PER_DAY(overrides?: CallOverrides): Promise<BigNumber>;

    allocateReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    canClaimReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdraw(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    earned(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    epochController(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastSnapshotIndexOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _stakeToken: string,
      _rewardFund: string,
      _timelock: string,
      _epochController: string,
      _rewardToken: string,
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    latestSnapshotIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochAllocatedReward(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochPoint(overrides?: CallOverrides): Promise<BigNumber>;

    rewardFund(overrides?: CallOverrides): Promise<BigNumber>;

    rewardLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerShare(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setEpochController(
      _epochController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    snapshotHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    unlockRewardEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlockWithdrawEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawLockupEpochs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BLOCKS_PER_DAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocateReward(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowRecoverRewardToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canClaimReward(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canWithdraw(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastSnapshotIndexOf(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _stakeToken: string,
      _rewardFund: string,
      _timelock: string,
      _epochController: string,
      _rewardToken: string,
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    latestSnapshotIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextEpochAllocatedReward(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextEpochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextEpochPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardLockupEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardPerShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEpochController(
      _epochController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLockUp(
      _withdrawLockupEpochs: BigNumberish,
      _rewardLockupEpochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    snapshotHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeFor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockRewardEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlockWithdrawEpoch(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawLockupEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}