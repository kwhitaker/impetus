import {action, observable} from 'mobx'
import isURL from 'validator/lib/isURL'

const protocolReg = new RegExp('^(?:[a-z]+:)?//', 'i')
const queryReg = new RegExp('^g!\s?', 'i')
const gUrl = 'http://www.google.com/search?q='

export default class QueryStore {
  @observable query = ''

  @action updateQuery (val = '') {
    this.query = val
  }

  searchOrRedirect () {
    const {query} = this
    if (!queryReg.test(query)) { return this.redirectOrLucky() }
    const newQ = query.replace(queryReg, '')
    window.location = `${gUrl}${newQ}`
    return
  }

  redirectOrLucky () {
    const {query} = this
    if (protocolReg.test(query)) {
      window.location = query
      return
    }

    window.location = `${gUrl}${encodeURI(query)}&btnI`
    return
  }
}
