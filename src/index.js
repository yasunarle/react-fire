import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/counter.jsx"

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Welcome name="Sara" />
      <Greeting isLoggedIn={false} />

      <input />
      <button>Add Todo</button>

      <ul></ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
