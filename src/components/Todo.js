import React from "react"
import "./Todo.css"
import { List, ListItem, ListItemText } from "@material-ui/core"

export function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        {/* <ListItemAvatar></ListItemAvatar> */}
        <ListItemText primary={props.text} secondary="deadline..." />
      </ListItem>
    </List>
  )
}

export default Todo
