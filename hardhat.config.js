require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost", // localhost is used for hardhat node
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // test: {
    //   url: process.env.HOST_URL,
    //   chainId: 1337,
    //   accounts: [`0x${process.env.ACCOUNT_ADDRESS}`],
    // },
    // sepolia: {
    //   url: 'https://eth-sepia.alchemyapi.io/v2/YOUR_API_KEY',
    //   chainId: 31337, // Replace with the appropriate chain ID
    //   gasPrice: 20000000000, // Adjust the gas price as needed
    // },
  },
  paths: {
    artifacts: "./artifacts",
  },
};
