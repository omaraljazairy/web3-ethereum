const assert = require('assert');
const ganache = require('ganache-cli'); // ethereum test network
const Web3 = require('web3'); // capital Web3 because we are using a constructor of Web3.
const web3 = new Web3(ganache.provider({gasLimit: "1000000"}));
const { abi, evm } = require('../compile_inbox');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    
    // use one account to deploy the contract
    inbox = await new web3.eth.Contract(abi)
        .deploy({
            data: evm.bytecode.object,
            arguments: ['Hello there!']
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })
})

describe('Inbox', () => {
    it('deploy a contract', () => {
        console.log('accounts => ', accounts);
        // console.log('inbox => ', inbox);
        console.log('inbox option => ', inbox.options);
        console.log('inbox methods => ', inbox.methods);
        console.log('inbox address => ', inbox.options.address);
        assert.ok(inbox.options.address)
    })
    it('inbox has a default message', async () => {
        const msg = await inbox.methods.message().call();
        console.log('msg => ', msg);
        assert.equal(msg, 'Hello there!')
    })
    it('inbox changed message', async () => {
        const msgTxt = 'New Message';
        // when sending a msg, we need to call send and give the account from where it is.
        // because sending a msg is not free. this is a transaction.
        const transaction = await inbox.methods.setMessage(msgTxt).send({ from: accounts[0]});
        console.log("transaction of sent msg => ", transaction);

        const msg = await inbox.methods.message().call();
        console.log('msg => ', msg);
        assert.equal(msg, msgTxt)
    })
})

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'drive';
//     }
// }

// let car; // global variable

// beforeEach(() => {
//     car = new Car();
// })
// describe('Car', () => {
//     it('expected to park', () => {
//         assert.equal(car.park(), 'stopped');
//     });
//     it('expect drive', () => {
//         assert.equal(car.drive(), 'drive');
//     })
// });
