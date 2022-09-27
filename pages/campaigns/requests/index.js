import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import DefaultLoader from '../../../components/DefaultLoader';
import { Button, Table, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import CampaignInstance from '../../../Campaigns/ethereum/campaign';
import web3 from '../../../Campaigns/ethereum/web3';


const RequestIndex = (props) => {
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { address, requests,  approversCount } = props;
    console.log("requests to table => ", props);
    console.log("requests to table requests => ", requests);

    const onApprove = async (index) => {
        console.log("approved => ", index);
        setLoading(true);
        setErrMsg('');

        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = CampaignInstance(address);
            await campaign.methods.approveRequest(index).send({
                from: accounts[0]
            })
            Router.replaceRoute(`/campaigns/${address}/requests`);
            setLoading(false);
        }catch (error) {
            setLoading(false);
            setErrMsg(error.message);
            console.error(error);
        }
    }


    const onFinalize = async (index) => {
        console.log("finalize => ", index);
        setLoading(true);
        setErrMsg('');

        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = CampaignInstance(address);
            await campaign.methods.finalizeRequest(index).send({
                from: accounts[0]
            })
            Router.replaceRoute(`/campaigns/${address}/requests`);
            setLoading(false);
        }catch (error) {
            setLoading(false);
            setErrMsg(error.message);
            console.error(error);
        }
    }

    const renderTable = () => {
        return (
            <>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Recipient</Table.HeaderCell>
                        <Table.HeaderCell>ApprovalCount</Table.HeaderCell>
                        <Table.HeaderCell>Approve</Table.HeaderCell>
                        <Table.HeaderCell>Finalized</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {requests.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    {index}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.description}
                                </Table.Cell>
                                <Table.Cell>
                                    {web3.utils.fromWei(data.value, 'ether')}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.recipient}
                                </Table.Cell>
                                <Table.Cell>
                                    {data.approvalCount}/{approversCount}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button 
                                        color="green" 
                                        content="Approve" 
                                        basic 
                                        onClick={() => onApprove(index)}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <Button 
                                        color="teal" 
                                        content="Finalie" 
                                        basic 
                                        onClick={() => onFinalize(index)}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
    
            {errMsg ? <Message negative header="ERROR"/> : null}
            
            </>
        )
    }
    
    return (
        <Layout>
            <h3>Request list {props.address} - {props.requestsCount}</h3>
            {renderTable()}
            <Link route={`/campaigns/${props.address}/requests/new`}>
                <a>
                    <Button content="Create new request" primary></Button>
                </a>
            </Link>
            { loading ? <DefaultLoader loading={loading} text="processing request" size="medium"/> : null }
        </Layout>
    );
}

RequestIndex.getInitialProps = async ({ query }) => {
    const {address} = query;
    console.log("address => ", address);

    const campaign = CampaignInstance(address);
    const requestsCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    console.log("requestsCount => ", requestsCount);
    console.log("approversCount => ", approversCount);

    const requests = await Promise.all(
        Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
            return campaign.methods.requests(index).call();
        })
    )

    console.log("requests => ", requests);

    return { address, requestsCount, requests, approversCount };
}

export default RequestIndex;