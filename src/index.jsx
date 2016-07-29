import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'mobx-react'
import store from 'store'
import App from './components/App'
import ViewStore from './state/stores/ViewStore'
import ToDoStore from './state/stores/ToDoStore'
import Clock from './state/stores/ClockStore'
import QueryStore from './state/stores/QueryStore'

const existingTodos = store.get('todos') || []
const viewStore = new ViewStore()
const todos = new ToDoStore.fromJS(existingTodos)
const clock = new Clock()
const query = new QueryStore()

function renderToRoot (AppComponent) {
  render(
    <AppContainer>
      <Provider viewStore={viewStore} clock={clock} queryStore={query} todoStore={todos}>
        <AppComponent />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderToRoot(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    renderToRoot(NextApp)
  })
}
