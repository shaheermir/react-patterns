import React from "react"
import { ChatConsumer } from "./Chat"

const Input = () => (
  <ChatConsumer>
    {({ currentMessage, updateCurrentMessage }) => (
      <input type="text" value={currentMessage} onChange={updateCurrentMessage} />
    )}
  </ChatConsumer>
)
Input.displayName = "Input"

export default Input
