import './style.css'

import { SO_USED } from './not-used'

console.log(SO_USED)

const form = document.getElementById('github-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const username = document.getElementById('input-box').value
  System.import('./fetch-person')
    .then(module => module.fetchPerson)
    .then(fetchPerson => fetchPerson(username))
})

