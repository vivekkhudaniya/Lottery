import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-contract-sizer";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-watcher";

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// If you are using MetaMask, be sure to change the chainId to 1337
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 150,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    sepolia: {
    url: "https://sepolia.infura.io/v3/36fc6c16737c477b9393a241b3060001",
    accounts: [""]
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
  },
  watcher: {
    test: {
      tasks: [
        "clean",
        { command: "compile", params: { quiet: true } },
        {
          command: "test",
          params: {
            testFiles: ["./test/unit/index.ts"],
          },
        },
      ],
      files: ["./test/**/*"],
      verbose: true,
    },
  },
};

export default config;
