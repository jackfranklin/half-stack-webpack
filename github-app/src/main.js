var username = 'jackfranklin'

fetch('https://api.github.com/users/jackfranklin')
  .then(function(d) { return d.json() })
  .then(function(data) {
    console.log('Got github data', data)
  })
