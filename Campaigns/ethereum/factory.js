import web3 from './web3';
import CampaignFactory from '/blockchain/Campaigns/ethereum/build/CampaignFactory.json';

const factory = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x4a416A647Bf63d3625609a1c7A75e6793e753ab2'
);

export default factory;