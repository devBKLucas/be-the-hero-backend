const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(express.json())//utilizado para converter todos os request.body em JSON

app.use(cors(
// {
//     origin: 'http://meuapp.com'
// }
))

app.use(routes)

app.use(errors())

app.listen(3333)