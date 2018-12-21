import React from "react"
import styled from "styled-components"

const Timestamp = styled.span`
  display: inline-block;
  margin-right: 1.2em;
  font-size: 0.8em;
  color: lightgrey;
`

const Text = styled.span`
  font-size: 1em;
  color: #333;
`

const MessageContainer = styled.div`
  font-size: 14px;
  font-family: menlo, monospace, sans-serif;
  margin: 10px 0;
`

const Messages = ({ messages }) => (
  <div>
    <h3>Messages</h3>
    <div className="msg__list">
      {messages.map((msg, i) => (
        <MessageContainer key={i}>
          <Timestamp>{msg.timestamp}</Timestamp>
          <Text>{msg.text}</Text>
        </MessageContainer>
      ))}
    </div>
  </div>
)

export default Messages
