import React from 'react'
import styles from './style.scss'
import {observer} from 'mobx-react'

const handleChange = (store, evt) => {
  store.updateQuery(evt.target.value)
}

const handleSubmit = (store, evt) => {
  evt.preventDefault()
  store.searchOrRedirect()
}

const AwesomeBar = observer(['queryStore'], ({queryStore, className, ...props}) => {
  return (
    <form className={`${className || ''} awesome-bar-form`} onSubmit={handleSubmit.bind(null, queryStore)} {...props}>
      <input className="awesome-bar" onChange={handleChange.bind(null, queryStore)}
        placeholder="Enter a search or URL." value={queryStore.query} tabIndex="1" />
    </form>
  )
})

export default AwesomeBar
