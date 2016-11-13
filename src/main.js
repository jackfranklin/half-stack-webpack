const button = document.getElementById('click-me')

button.addEventListener('click', e => {
  System.import('./button').then(buttonModule => {
    buttonModule.default(e)
  })
});
console.log('Hello World')
