import React from 'react';
import Layout from '../../components/Layout';
import DefaultForm from '../../components/DefaultForm';
import CampaignInstance from '../../Campaigns/ethereum/campaign';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from '../../routes';
import ExampleButton from '../../components/Button';
import web3 from '../../Campaigns/ethereum/web3';


const Show = (props) => {
    return (
        <Layout>
            <h1>Welcome to the fisrt Next page 2 {props.query.minimumContribution}</h1>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <Grid.Row>
                            {MyCards(props)}
                        </Grid.Row>
                        <Grid.Row>
                            <Link route={`/campaigns/${props.query.address}/requests`}>
                                <a>
                                    <ExampleButton text="View requests" floated="left" />
                                </a>
                            </Link>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <DefaultForm address={props.query.address}/> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    );
};

const MyCards = (props) => {
    const {
        minimumContribution,
        balance,
        requests,
        approversCount,
        manager
    } = props.query

    const items = [
        {
            header: manager,
            description:
              'manager - You are the Greatest Ever',
            meta: 'The GOAT',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: minimumContribution,
            description:
              'minimumContribution - Will never be forgotten',
            meta: 'The GOAT',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: requests,
            description:
              'requests - Rafa will still be there',
            meta: 'The GOAT',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: approversCount,
            description:
              'approversCount - No one will replace you',
            meta: 'The GOAT',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: web3.utils.fromWei(balance, 'ether'),
            description:
              'Thanks for everything Roger',
            meta: 'The GOAT',
            style: { overflowWrap: 'break-word' }
        }
    ]

    return (
        <Card.Group items={items} />
    );
};

Show.getInitialProps = async ({ query }) => {
    console.log("query => ", query.address)

    const campaign = CampaignInstance(query.address);
    const summary = await campaign.methods.getSummary().call();

    console.log("Summary => ", summary);
    const data = {
        minimumContribution : summary[0],
        balance: summary[1],
        requests: summary[2],
        approversCount: summary[3],
        manager: summary[4],
        address: query.address
    }
    console.log("data => ", data);

    return { query: data}
}

export default Show;