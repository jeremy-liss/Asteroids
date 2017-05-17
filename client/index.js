var request = require('superagent')
var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./state')
var date = require('../lib/getDate')
var getAsteroids = require('../lib/getAsteroids')
var App = require('./App')

var today = date(0)

request
  .get('/api')
  .end(function(err, res){
    if (err) {
      throw err
    } else {
        state.asteroids = res.body.near_earth_objects[today]
        getAsteroids(state.asteroids)
        render ()
    }
  })

function showInfo() {
  state.display = !state.display
  render ()
}

state.showInfo = showInfo

function render () {
  ReactDOM.render(App(state), document.getElementById('app'))
}
