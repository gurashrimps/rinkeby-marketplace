require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/ayHhac_uUumhuuKoRyrY0qzHkvDesmNk",
    //   accounts: [`0x${process.env.HOWL_PRIVATE_KEY}`],
    // },
    // bsc_testnet: {
    //     url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    //     chainId: 97,
    //     gasPrice: 20000000000,
    //     accounts: [`0x${process.env.HOWL_PRIVATE_KEY}`]
    // },
    // bsc_mainnet: {
    //     url: 'https://bsc-dataseed.binance.org/',
    //     chainId: 56,
    //     gasPrice: 20000000000,
    //     accounts: [`0x${process.env.HOWL_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
