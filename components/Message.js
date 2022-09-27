import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageNegative = (props) => (
  <Message negative>
    <Message.Header>{props.header ? props.header : "ERROR"}</Message.Header>
    <p>{props.msg}</p>
  </Message>
)

export default MessageNegative