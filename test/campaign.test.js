const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const gas = "100000000"
const web3 = new Web3(ganache.provider({gasLimit: gas}));
 
const compiledFactory = require('/blockchain/Campaigns/ethereum/build/CampaignFactory.json');
const compiledCampaign = require('/blockchain/Campaigns/ethereum/build/Campaign.json');

let accounts;
let factory;
let campaingAddress;
let campaign;

beforeEach(async () => {
    // get all the accounts
    accounts = await web3.eth.getAccounts();

    //deploy the factory
    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object})
        .send({ from: accounts[0], gas: gas});
    // console.log("factory deployed transaction => ", factory);

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: gas
    });

    [campaingAddress] = await factory.methods.getDeployedCampaigns().call()

    // create an instance of the deployed campaign
    campaign = await new web3.eth.Contract(
        compiledCampaign.abi,
        campaingAddress
    );  
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('check that the caller is the campaing manager', async () => {
        let currManager = await campaign.methods.manager().call();
        assert.equal(currManager, accounts[0]);
    });
    it('allow people to contribute money and them as approvers', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '101'
            // value: web3.utils.toWei('0.12', 'ether')
        })
        const approversCount = await campaign.methods.approversCount().call();
        const contributer = await campaign.methods.approvers(accounts[1]).call();
        assert.equal(approversCount, 1);
        assert(contributer)
    });
    it('do not allow a conribution less than minimum', async () => {
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '99'
            });
            assert(false);
        } catch (error) {
            assert(error);
        }
    });
    it('process requests', async () => {
        //contribute from account[0] 10 ether
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });
        
        // create a request to send money to account[1]
        await campaign.methods.createRequest(
            'A request', web3.utils.toWei('5', 'ether'), accounts[1]
        ).send({
            from: accounts[0],
            gas: gas
        });

        // approve the request
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: gas
        });
 
        // finalize the request
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: gas
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        console.log("balance before conversion => ", balance);
        balance = web3.utils.fromWei(balance, 'ether');
        console.log("balance after conversion from Wei => ", balance);
        balance = parseFloat(balance);
        console.log("balance in float => ", balance);

        assert(balance > 100)


    })
})
