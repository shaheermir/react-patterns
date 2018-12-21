import React from "react"
import ReactDOM from "react-dom"

import Chat from "./components/Chat"

const App = () => (
  <div>
    <Chat />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
