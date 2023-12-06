
## Testnet

Contracts are deployed onto Goerli testnet: [0x3a7483cbCB08B90f2c6639910c43a03D8E7BEd5C] but haven't verified getting an issue "Error HH303: Unrecognized task verify" 
- To verify contracts followed both ways flattened and multiple but bytes code not getting match have to look further;

```sh
$ npm i 
$ npx hardhat test
```

Then on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
$ npx hardhat run scripts/deploy.ts --network localhost
```

