import React from "react"

const Button = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Send
  </button>
)

Button.displayName = "Button"

export default Button
