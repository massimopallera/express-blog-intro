const axios = require('axios')

const localhost = "http://127.0.0.1:3000"

axios.get(localhost)
.then(response => console.log(response))  