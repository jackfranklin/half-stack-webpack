import './style.css'

const form = document.getElementById('github-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const username = document.getElementById('input-box').value
  System.import('./fetch-person')
    .then(module => module.fetchPerson)
    .then(fetchPerson => fetchPerson(username))
})

