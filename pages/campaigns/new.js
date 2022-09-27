import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Input } from 'semantic-ui-react';
import ExampleButton from '../../components/Button';
import factory from '../../Campaigns/ethereum/factory';
import web3 from '../../Campaigns/ethereum/web3';
import MessageNegative from '../../components/Message';
import { Router } from '../../routes';

class NewCampaign extends Component {
    state = {
        minimumContribution: '',
        errMsg: '',
        loading: false
    }

    onSubmit = async (event) => {
        this.setState({loading: true})
        console.log("minimumContribution => ", this.state.minimumContribution);
        event.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            })
            // this.setState({loading: false})
            Router.pushRoute('/');
        } catch (err) {
            this.setState({errMsg: err.message, loading: false});
        }
    }

    render() {
        return (
            <Layout>
                {this.state.errMsg ? <MessageNegative msg={this.state.errMsg} /> : null}
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input 
                        label="Wei" 
                        labelPosition="right" 
                        placeholder='contribution' 
                        value={this.state.minimumContribution}
                        onChange={event => this.setState({minimumContribution: event.target.value})}
                    />
                    </Form.Field>
                    <ExampleButton loading={this.state.loading} text="Submit" floated="left"/>
                </Form>
            </Layout>
        );
    };
};

export default NewCampaign