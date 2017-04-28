var env = [process.env.NODE_ENV || 'development']
var request = require ('superagent')
require('dotenv').config()

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}

var today = yyyy+'-'+mm+'-'+dd;
var URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+today+'&end_date='+today+'&api_key='+process.env.KEY

function getAPI() {
  request
    .get(URL)
    .end(function(err, res){
      if (err) {
        throw err
      } else {
        return res.body
      }
  })
}

module.exports = {
  getAPI: getAPI
}
