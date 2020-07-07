import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { Button, InputLabel, Input, FormControl } from "@material-ui/core"
import firebase from "firebase"
import { db } from "./firebase"
// import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
// components
import Todo from "./components/Todo"
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
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  // useEffect
  // description
  useEffect(() => {
    db.collection("todos")
      .orderBy("created_at", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo))
      })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection("todos").add({
      todo: input,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    })
    // setTodos([...todos, input])
    setInput("")
  }

  return (
    <div className="App">
      <Counter />
      <Welcome name="Sara" />
      <Greeting isLoggedIn={false} />

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          color="primary"
          variant="contained"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
