var express = require('express')
var router = express.Router()

var env = [process.env.NODE_ENV || 'development']
var request = require ('superagent')
require('dotenv').config()

var date = require('../lib/getDate')

var yesterday = date(-2)
var tomorrow = date(1)
var URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+yesterday+'&end_date='+tomorrow+'&api_key='+process.env.KEY

request
  .get(URL)
  .end(function(err, res){
    if (err) {
      throw err
    } else {
      sendApi(res.body)
    }
  })


function sendApi(result){
  router.get('/', function (req, res) {
    res.send(result)
  })
}


module.exports = router
