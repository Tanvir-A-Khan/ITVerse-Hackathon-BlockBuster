const { ethers } = require("hardhat");
require("dotenv").config();
const { abi } = require("../artifacts/contracts/Platform.sol/Platform.json");

const deployedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const main = async () => {
  const provider = new ethers.JsonRpcProvider(process.env.HOST_URL);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(deployedAddress, abi, signer);

  await contract.buyABX({ value: 50000 });
  const bal = await contract.getUserABXInfo();

  console.log(bal);
};

main().catch((err) => {
  console.log(err);
  process.exitCode = 1;
});
