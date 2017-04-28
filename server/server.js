var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var route = require('./route')

var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cors({origin: '*'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', route)


module.exports = server
