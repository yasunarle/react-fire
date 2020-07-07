import React, { useState } from "react"
import "./Todo.css"
import { List, ListItem, ListItemText, Modal } from "@material-ui/core"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { db } from "../firebase"

export function Todo(props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}>close</button>
        </div>
      </Modal>
      <List className="todo__list" key={props.todo.id}>
        <ListItem>
          {/* <ListItemAvatar></ListItemAvatar> */}
          <ListItemText primary={props.todo.todo} secondary="deadline..." />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  )
}

export default Todo
