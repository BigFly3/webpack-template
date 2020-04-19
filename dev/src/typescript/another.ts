import '../css/another.scss'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

class Another {
  constructor() {
    console.log('Another')
  }
}

document.addEventListener('DOMContentLoaded', (): void => {
  new Another()
})
