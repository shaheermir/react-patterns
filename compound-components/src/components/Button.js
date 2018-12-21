import React from "react"
import { ChatConsumer } from "./Chat"

const Button = () => <ChatConsumer>{({ add }) => <button onClick={add}>Send</button>}</ChatConsumer>

Button.displayName = "Button"

export default Button
