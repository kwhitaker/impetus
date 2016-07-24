import 'scss/global.scss'
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import ToDoList from './ToDos/ToDoList'
import AwesomeBar from './AwesomeBar/index'

class App extends Component {
  componentDidMount () {
    this.props.viewStore.fetchImgSrc()
    document.getElementsByClassName('awesome-bar')[0].focus()
  }

  componentWillUnMount () {
    this.props.clock.tearDown()
  }

  render () {
    const {bgUrl} = this.props.viewStore
    const {time} = this.props.clock
    const bgStyle = {backgroundImage: bgUrl}

    return (
      <div className="main-content" style={bgStyle}>
        <div className="container">
          <div className="row">
            <h1 className="clock twelve columns">{time}</h1>
          </div>
          <div className="row">
            <AwesomeBar className="twelve columns" />
          </div>
          <div className="row">
            <ToDoList className="twelve columns" />
          </div>
        </div>
      </div>
    )
  }
}

export default observer(['clock', 'queryStore', 'viewStore'], App)
