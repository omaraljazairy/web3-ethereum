import web3 from './web3';
import Campaign from '/blockchain/Campaigns/ethereum/build/Campaign.json';

const CampaignInstance = (address) => {
    return new web3.eth.Contract(
        Campaign.abi,
        address
    );
}

export default CampaignInstance;