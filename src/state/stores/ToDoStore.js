import {computed, observable} from 'mobx'
import ToDo from '../models/ToDoModel'
import store from 'store'

export default class ToDoStore {
  @observable todos = []

  addTodo(title) {
    this.todos.push(new ToDo(this, {title}))
    this.setCache()
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
    this.setCache()
  }

  toJS() {
    return this.todos.map(todo => todo.toJS())
  }

  setCache() {
    store.set('todos', this.toJS())
  }

  static fromJS(array) {
    const todoStore = new ToDoStore()
    todoStore.todos = array.map(item => ToDo.fromJS(todoStore, item))
    return todoStore
  }
}
