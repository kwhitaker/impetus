import {observable} from 'mobx'
import uuid from 'uuid'

export default class ToDo {
  @observable title
  @observable id
  @observable completed

  constructor(store, props) {
    const {title, id, completed} = props
    this.store = store
    this.id = id || uuid.v4()
    this.title = title
    this.completed = completed || false
  }

  toggleComplete() {
    this.completed = !this.completed
    this.store.setCache()
  }

  destroy() {
    this.store.todos.remove(this)
    this.store.setCache()
  }

  setTitle(title) {
    this.title = title
  }

  toJS() {
    const {completed, id, title} = this
    return {completed, id, title}
  }

  static fromJS(store, props) {
    return new ToDo(store, props)
  }
}
