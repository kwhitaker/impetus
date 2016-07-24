import {observable} from 'mobx'

export default class ViewStore {
  @observable loading = false
  @observable bgUrl = ''

  constructor() {
    const self = this
    this.imgFetch = new Image()
    this.imgFetch.onload = function() {
      self.bgUrl = `url('${this.src}')`
    }
  }

  fetchImgSrc() {
    this.imgFetch.src = 'https://source.unsplash.com/category/nature/daily/'
  }
}
