import React, { Component, createContext } from "react"
import Messages from "./Messages"
import Input from "./Input"
import Button from "./Button"

const ChatContext = createContext()
export const ChatProvider = ChatContext.Provider
export const ChatConsumer = ({ children }) => (
  <ChatContext.Consumer>
    {context => {
      if (!context) {
        throw new Error(
          "SubComponents of Chat must be rendered as children of Chat, and not outside it."
        )
      }
      return children(context)
    }}
  </ChatContext.Consumer>
)

class Chat extends Component {
  static Messages = Messages
  static Input = Input
  static Button = Button

  updateCurrentMessage = event => {
    const { value } = event.target
    this.setState({ currentMessage: value })
  }

  add = () => {
    console.log("hey")
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

  /* state must be declared after ur funcs due to class properties ????  */
  state = {
    currentMessage: "",
    messages: [],
    add: this.add,
    updateCurrentMessage: this.updateCurrentMessage
  }

  render() {
    const { children } = this.props

    return (
      <ChatProvider value={this.state}>
        <h1>Chatrooom</h1>
        {children}
      </ChatProvider>
    )
  }
}

export default Chat
