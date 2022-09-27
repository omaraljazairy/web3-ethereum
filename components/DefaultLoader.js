import { Message, Icon } from 'semantic-ui-react'

const DefaultLoader = (props) => (
  <Message icon info>
    <Icon name={props.name ? props.name : 'circle notched' }  loading={props.loading} />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      Request is in progress
    </Message.Content>
  </Message>
);

export default DefaultLoader;