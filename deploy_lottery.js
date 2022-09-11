const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile_lottery');

const provider = new HDWalletProvider(
    'curious junior party doll grit trade smooth limb buffalo have sausage matter',
    'https://rinkeby.infura.io/v3/2188fa020e8a4f5d8f0e23ae7ed900e4'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  
  console.log('Interface => ', interface)
  console.log('Contract deployed to address => ', result.options.address);
  provider.engine.stop();
};
deploy();
