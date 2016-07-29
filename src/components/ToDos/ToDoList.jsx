import React from 'react'
import {observer} from 'mobx-react'
import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'
import styles from './style.scss'

const ToDoList = ({todoStore, className, ...props}) => {
  const {todos} = todoStore
  const list = <ul>{todos.map(t => <ToDoItem todo={t} key={t.id} />)}</ul>
  const title = todos.length
    ? <h5>To-do List</h5>
    : <h5 className="zero-state">Nothing to do!</h5>

  let classes = 'todo-list-container'
  if (className) {
    classes = `${className} ${classes}`
  }

  const actions = todos.length
    ? <p><a onClick={todoStore.clearCompleted.bind(todoStore)}>Clear Completed</a></p>
    : null

  return (
    <div className={classes} {...props}>
      {title}
      {list}
      <ToDoInput />
      {actions}
    </div>
  )
}

export default observer(['todoStore'], ToDoList)
