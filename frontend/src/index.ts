console.log('test')
const test = fetch('http://localhost:3000', {
  method: 'GET',
  headers: {"Content-Type": "application/json"}
})
  .then(response => response.json())
  .then(data => console.log(data.msg))