import './style.css'

const username = 'jackfranklin'

const fetchPerson = username =>
  fetch(`https://api.github.com/users/${username}`)
    .then(d => d.json())
    .then(displayPerson)

const displayPerson = user =>
  document.getElementById('results').innerHTML = `
    <h1>${user.name}</h1>
    <h3>${user.company}</h3>
    <p>${user.bio || 'No Bio :('}</p>
  `

const form = document.getElementById('github-form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const username = document.getElementById('input-box').value
  fetchPerson(username)
})

