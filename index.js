import ObserverList from "./ObserverList.js";
import Subject from "./Subject.js";
import Observer from "./Observer.js";

const subject = new Subject()

const controlCheckbox = document.getElementById('mainCheckbox')
const addBtn = document.getElementById('addNewObserver')
const container = document.getElementById('observersContainer')

function extend(extension, obj) {
  for (var key in extension) {
    obj[key] = extension[key]
  }
}

let oggetto = new Subject()
console.log(oggetto)
for (var key in oggetto) {
  controlCheckbox[key] = oggetto[key]
}

for (var key in controlCheckbox) {
  console.log(key)
}

extend(new Subject(), controlCheckbox)

controlCheckbox.addEventListener('click', function () {
  controlCheckbox.notify('cecco')
})

function addObserver() {
  const checkbox = document.createElement('input').type = 'checkbox'
  extend(new Observer(), checkbox)
  controlCheckbox.addObserver(checkbox)
  container.appendChild(checkbox)
}

// addObserver()
