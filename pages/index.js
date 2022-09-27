import React, { Component } from 'react';
import factory from '../Campaigns/ethereum/factory';
import ExampleButton from '../components/Button';
import Layout from '../components/Layout';
import { Card } from 'semantic-ui-react';
import { Link } from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        // similar to componentDidMount but this is a next funtion. It will 
        // skip the rendering of the page toget the data
        const campaings = await factory.methods.getDeployedCampaigns().call()
        console.log("campaings deployed: ", campaings);
        return { liveCampaigns: campaings }
    }

    renderCampaigns() {
        const items = this.props.liveCampaigns.map(address => {
            return {
                header: address,
                description: <Link route={`/campaigns/${address}`}>
                                <a>View Campaign</a>
                            </Link>,
                fluid: true
            }
        });
        return <Card.Group items={items} />;
    }


    render() {
        return (
            <Layout>
                <div>
                    {/* <Label size="large">Live Campaign</Label> */}
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a className="item">
                            <ExampleButton text="Create Campaign"/>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
         );
    }
}

export default CampaignIndex;