import React, { Component } from "react"
import Messages from "./Messages"
import Input from "./Input"
import Button from "./Button"

class Chat extends Component {
  state = {
    currentMessage: "",
    messages: []
  }

  updateCurrentMessage = event => {
    const { value } = event.target
    this.setState({ currentMessage: value })
  }

  add = () => {
    const { currentMessage } = this.state

    this.setState(prevState => ({
      currentMessage: "",
      messages: [
        ...prevState.messages,
        {
          text: currentMessage,
          timestamp: new Date().toLocaleDateString()
        }
      ]
    }))
  }

  render() {
    const { currentMessage, messages } = this.state
    return (
      <div>
        <h1>Chatroom</h1>
        <Messages messages={messages} />
        <Input value={currentMessage} onChange={this.updateCurrentMessage} />
        <Button onClick={this.add} />
      </div>
    )
  }
}

export default Chat
