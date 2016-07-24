import React from 'react'
import {observer} from 'mobx-react'

const ToDoItem = ({todo, ...props}) => {
  const {destroy, id, title, completed, toggleComplete} = todo

  let classes = 'label-body'
  if (completed) {
    classes = `${classes} completed`
  }

  return (
    <li className="todo-item">
      <label htmlFor={id} tabIndex="1">
        <input type="checkbox" id={id} checked={completed} onChange={toggleComplete.bind(todo)} />
        <span className={classes}>{title}</span>
      </label>
      <a className="clear-todo" onClick={destroy.bind(todo)} title="Remove Todo">&times;</a>
    </li>
  )
}

export default observer(ToDoItem)
