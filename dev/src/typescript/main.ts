import './modules/importPug'
import '../css/main.scss'

import load from './modules/load'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

interface TestType {
  testTitle: string
}

class Home {
  element: HTMLElement
  number: number
  constructor() {
    this.element = document.querySelector('.test__image') as HTMLInputElement
    this.number = 0
    this.element.textContent = `${this.number}`
    console.log('Home')
  }

  loadJSON() {
    load<TestType>(`${process.env.PUBLIC_URL}/json/test.json`).then(data => {
      const element = document.querySelector('.test__title')!
      element.textContent = data.testTitle
    })
  }

  click() {
    this.element.addEventListener('click', () => {
      this.number++
      this.element.textContent = `${this.number}`
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const home = new Home()
  home.loadJSON()
  home.click()
})
