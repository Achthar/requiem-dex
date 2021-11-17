// import { HardhatRuntimeEnvironment } from 'hardhat/types';
// import { ethers } from 'hardhat';
// import { DeployFunction } from "hardhat-deploy/types";
// import { parseUnits } from 'ethers/lib/utils';
// import { expandDecimals } from "../test/ts/shared/utilities";
// import { BigNumber, Contract } from "ethers";
// import { toNormalizedWeights } from "./normalizedWeights"
// import { MONTH } from './time';
// import { fp } from "./numbers"
// import { deploy, deployedAt } from "./contract";
// import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signers';

// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
// 	const { deployments, getNamedAccounts, network } = hre;
// 	// const { execute, get } = deployments;
// 	const { localhost, user } = await getNamedAccounts();
// 	let assetManager: SignerWithAddress, owner: SignerWithAddress;

// 	[, assetManager, owner] = await ethers.getSigners();
// 	console.log('network', network);
// 	console.log('localhost', localhost);
// 	console.log('2ndParty', user);

// 	const t1 = await deploy(
// 		'MockERC20',
// 		{
// 			from: owner,
// 			args: ['T1 Coin', 'T1', 6]
// 		},
// 	);

// 	const t2 = await deploy(
// 		'MockERC20', {

// 		from: owner,
// 		args: ['T2 Coin', 'T2', 6],
// 	});

// 	const t3 = await deploy(
// 		'MockERC20', {
// 		from: owner,
// 		args: ['T3 Coin', 'T3', 18],
// 	});


// 	const t4 = await deploy(
// 		'MockERC20', {
// 		from: owner,
// 		args: ['T4 Coin', 'T4', 18],
// 	});

// 	const weth = await deploy(
// 		'TestWETH', {
// 		from: owner,
// 		args: [owner],
// 	});

// 	// await execute('T1', { from: owner.address, log: true }, 'mint', owner, parseUnits('10000000', 6));
// 	// await execute('T2', { from: owner.address, log: true }, 'mint', owner, parseUnits('10000000', 6));
// 	// await execute('T3', { from: owner.address, log: true }, 'mint', owner, parseUnits('10000000', 18));
// 	// await execute('T4', { from: owner.address, log: true }, 'mint', owner, parseUnits('10000000', 18));
// 	// await execute('T1', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 6) );
// 	// await execute('T2', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 6) );
// 	// await execute('T3', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 18) );
// 	// await execute('T4', { from: localhost, log: true }, 'mint', user, parseUnits('10000000', 18) );

// 	// const wethAddress = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'//await getWeth(hre);

// 	// const weth = await ethers.getContractAt("IWETH", wethAddress);

// 	// const wethContract = await weth.attach(
// 	// 	wethAddress
// 	//   );

// 	const authorizer = await deploy(
// 		"Authorizer", {
// 		from: owner,
// 		args: [
// 			localhost
// 		],
// 	});

// 	// const vaultAuthorization = await deploy("VaultAuthorization", {
// 	// 	contract: "VaultAuthorization",
// 	// 	skipIfAlreadyDeployed: true,
// 	// 	from: localhost,
// 	// 	args: [
// 	// 		authorizer.address,	// IAuthorizer authorizer,
// 	// 	],
// 	// 	log: true,
// 	// });


// 	const vault = await deploy(
// 		"Vault", {
// 		from: owner,
// 		args: [
// 			authorizer.address,	// IAuthorizer authorizer,
// 			weth.address,	// IWETH weth,
// 			0,	// uint256 pauseWindowDuration,
// 			0,	// uint256 bufferPeriodDuration
// 		],
// 	});

// 	console.log("--- get tokens ---")
// 	// const t1 = await get('T1');
// 	// const t2 = await get('T2');
// 	// const t3 = await get('T3');
// 	// const t4 = await get('T4');

// 	// await execute('T1', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
// 	// await execute('T2', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
// 	// await execute('T3', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);
// 	// await execute('T4', { from: user }, 'approve', router.address, ethers.constants.MaxInt256);

// 	console.log("--- deploy formulas ---")
// 	const formula = await deploy("RequiemWeightedMath", {

// 		from: owner,
// 		args: [

// 		],
// 	});

// 	console.log("--- deploy factory ---")
// 	const weighted2PoolFactory = await deploy("Requiem2PoolTokensFactory", {

// 		from: owner,
// 		args: [
// 			vault.address,
// 			formula.address
// 		],
// 	});

// 	console.log("--- create pool ---")

// 	const NAME = 'Balancer Pool Token';
// 	const SYMBOL = 'BPT';
// 	const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
// 	const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)]);

// 	const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
// 	const BASE_BUFFER_PERIOD_DURATION = MONTH;


// 	// 	console.log(["TT", // string memory name,
// 	// 		"TTT", // string memory symbol,
// 	// 		[t1.address, t2.address], // IERC20[] memory tokens,
// 	// 		[BigNumber.from(500), BigNumber.from(500)], // uint256[] memory weights,
// 	// 		BigNumber.from('1000000000000'), // uint256 swapFeePercentage,
// 	// 		'false', // bool oracleEnabled,
// 	// 		localhost]) // address owner)

// 	// 	const weights = await execute("Requiem2PoolTokensFactory", { from: localhost, log: true },
// 	// 		"create",
// 	// 		"TT", // string memory name,
// 	// 		"TTT", // string memory symbol,
// 	// 		[t1.address, t2.address], // IERC20[] memory tokens,
// 	// 		[BigNumber.from(50), BigNumber.from(50)], // uint256[] memory weights,
// 	// 		BigNumber.from('1000000000000'), // uint256 swapFeePercentage,
// 	// 		false, // bool oracleEnabled,
// 	// 		localhost // address owner
// 	// 	);
// 	// 	console.log("---- res: " + weights)
// 	const factory = await deploy('Requiem2PoolTokensFactory', { args: [vault.address] });

// 	async function createPool(): Promise<Contract> {
// 		const receipt = await (
// 			await factory.create(
// 				NAME,
// 				SYMBOL,
// 				[t1.address, t2.address],
// 				WEIGHTS,
// 				POOL_SWAP_FEE_PERCENTAGE,
// 				owner.address
// 			)
// 		).wait();
// 		return receipt
// 		// const event = expectEvent.inReceipt(receipt, 'PoolCreated');
// 		// return deployedAt('WeightedPool', event.args.pool);
// 	}

// 	const pool = await createPool();

// 	console.log("pool", pool)

// };
// export default func;
// func.tags = ['deploy-pool'];
