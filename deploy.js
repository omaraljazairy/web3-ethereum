const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3'); 
const { abi, evm } = require('./compile');

// provider with an account
const provider = new HDWalletProvider(
    'curious junior party doll grit trade smooth limb buffalo have sausage matter',
    'https://rinkeby.infura.io/v3/2188fa020e8a4f5d8f0e23ae7ed900e4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("going to deploy using one of the accounts => ", accounts);

    const transaction = await new web3.eth.Contract(abi)
        .deploy({
            data: evm.bytecode.object, 
            arguments: ['Hello there from v1.0.1!']
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        })
    console.log('deployed with transaction address => ', transaction.options.address);

    // prevent a hanging deployment
    provider.engine.stop();
    console.log("deployment success");
    
};

deploy();