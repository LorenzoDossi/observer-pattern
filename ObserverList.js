export default class ObserverList {
  constructor() {
    this.observerList = []
  }

  add(obj) {
    return this.observerList.push(obj)
  }

  empty() {
    this.observerList = []
  }

  count() {
    return this.observerList.length
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }

  indexOf(obj) {
    let pointer = -1
    let i = 0
    while (i <= this.observerList.length) {
      if (obj === this.observerList[i]) {
        pointer = i
      }
      i++
    }

    return pointer
  }

  removeIndexAt(index) {
    if (index > -1 && index < this.observerList.length) {
      this.observerList.splice(index, 1)
    }
  }
}
