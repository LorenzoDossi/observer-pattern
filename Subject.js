import ObserverList from "./ObserverList.js";

export default class Subject {
  constructor() {
    this.observers = new ObserverList
  }

  addObserver(observer) {
    this.observers.add(observer)
  }

  removeObserver(observer) {
    this.observers.removeIndexAt(this.observers.indexOf(observer))
  }

  notify(context) {
    const observerCount = this.observers.count()
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context)
    }
  }
}
