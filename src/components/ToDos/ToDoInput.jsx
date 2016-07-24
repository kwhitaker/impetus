import React from 'react'
import {observer} from 'mobx-react'

const handleKeyDown = (store, e) => {
  switch (e.key) {
    case 'Enter':
      store.addTodo(e.target.value)
      e.target.value = ''
      e.target.blur()
      break
    default:
      return
  }
}

const ToDoInput = observer(['todoStore'], ({todoStore}) => {
  const keyDown = handleKeyDown.bind(null, todoStore)
  return <input type="text" className="new-todo" onKeyDown={keyDown} placeholder="Add a to-do" />
})

export default ToDoInput
