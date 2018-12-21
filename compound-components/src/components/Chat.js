import React, { Component } from "react"
import Messages from "./Messages"
import Input from "./Input"
import Button from "./Button"

class Chat extends Component {
  static Messages = Messages
  static Input = Input
  static Button = Button

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
    const { updateCurrentMessage, add } = this
    const { children } = this.props
    const { messages, currentMessage } = this.state

    return (
      <div>
        <h1>Chatrooom</h1>
        {React.Children.map(children, child => {
          if (child.type.displayName === "Messages") {
            return React.cloneElement(child, { messages })
          }

          if (child.type.displayName === "Input") {
            return React.cloneElement(child, {
              value: currentMessage,
              onChange: updateCurrentMessage
            })
          }

          if (child.type.displayName === "Button") {
            return React.cloneElement(child, {
              onClick: add
            })
          }

          return child
        })}
      </div>
    )
  }
}

export default Chat
