import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { Form , Button, Input, Message } from 'semantic-ui-react';
import CampaignInstance from '../../../Campaigns/ethereum/campaign';
import web3 from '../../../Campaigns/ethereum/web3';
import { Link, Router } from '../../../routes';


const NewRequest = (props) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');;
    const [recipient, setRecipient] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');


    const onSubmit = async (event) => {
        event.preventDefault();
        const address = props.query.address;
        setLoading(true);
        console.log("address => ", address);
        console.log("description => ", description);
        console.log("value => ", value);
        console.log("recipient => ", recipient);
        // get the account
        try {
            const campaign = CampaignInstance(address);
            const accounts = await web3.eth.getAccounts();
            const response = await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({
                from: accounts[0]
            })
            console.log("response => ", response);
            Router.pushRoute(`/campaigns/${address}/requests`);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setMsg(error.message);
        }
    }


    return (
        <Layout>
            <h3>Create a request</h3>
            <Link route={`/campaigns/${props.query.address}/requests`}>
                <a>
                    <Button content="Back" secondary></Button>
                </a>
            </Link>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value={description}
                        onChange={event => setDescription(event.target.value)} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value in Ether</label>
                    <Input 
                        value={value}
                        onChange={event => setValue(event.target.value)} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient}
                        onChange={event => setRecipient(event.target.value)} 
                    />
                </Form.Field>
                <Button content="Submit request" primary loading={loading} />             
            </Form>
            <h3>New Request {props.query.address}</h3>
            {msg ? <Message negative header="ERROR"/> : null}
        </Layout>
     );
}

NewRequest.getInitialProps = async ({ query }) => {
    console.log("query => ", query.address)

    return { query };
}

export default NewRequest;