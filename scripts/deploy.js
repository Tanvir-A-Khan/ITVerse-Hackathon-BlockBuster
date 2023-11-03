const hre = require("hardhat");
const ethers = hre.ethers;

/**
 * @dev deploy contract
 */
const main = async () => {
  // Get accounts
  const [account] = await ethers.getSigners();

  const eth_amount = ethers.parseEther("10");
  const contract = await ethers.deployContract("Platform");
  await contract.waitForDeployment();

  const balance = await ethers.provider.getBalance(contract.target);

  console.log("Contract Deployed to", contract.target, "from", account.address);
  console.log("Contract Balance", Number(balance) / 1e18); // To convert into ETH
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
