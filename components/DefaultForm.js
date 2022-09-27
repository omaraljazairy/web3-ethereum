import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import ExampleButton from './Button';
import CampaignInstance from '../Campaigns/ethereum/campaign';
import web3 from '../Campaigns/ethereum/web3';
import { Router } from '../routes';
import MessageNegative from './Message';


const DefaultForm = (props) => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');


    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrMsg(null);
        console.log("event => ", event);
        console.log("event value => ", value);
        console.log("props => ", props.address);
        const campaign = CampaignInstance(props.address);
        console.log("campaign => ", campaign);
        try {
            const accounts = await web3.eth.getAccounts();
            console.log("accounts => ", accounts);
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            });
            console.log("contribution is sent");
            Router.replaceRoute(`/campaigns/${props.address}`);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setErrMsg(error.message);
        }
    }

    return (
        <div>
            {errMsg ? <MessageNegative msg={errMsg} /> : null}
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <label>Amount to Contribution</label>
                    <Input 
                        label="Ether" 
                        labelPosition="right" 
                        placeholder='contribution'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </Form.Field>
            <ExampleButton loading={loading} text="Contribute" floated="left"/>
        </Form>
    </div>

    );
}

export default DefaultForm;