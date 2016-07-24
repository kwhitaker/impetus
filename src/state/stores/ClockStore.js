import {observable} from 'mobx'

const formatTime = (t) => t < 10 ? `0${t}` : `${t}`

const timeToStr = () => {
    const newTime = new Date()
    const h = formatTime(newTime.getHours())
    const m = formatTime(newTime.getMinutes())
    return `${h}:${m}`
}

export default class ClockStore {
  interval
  @observable time = timeToStr()

  constructor() {
    this.interval = setInterval(() => {
      this.time = timeToStr()
    }, 1000)
  }

  tearDown () {
    this.interval = undefined
  }
}
