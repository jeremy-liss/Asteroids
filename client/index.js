var request = require('superagent')
var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./state')
var date = require('../lib/getDate')
var App = require('./App')

var today = date(0)

request
  .get('/api')
  .end(function(err, res){
    if (err) {
      throw err
    } else {
        asteroids = res.body.near_earth_objects[today]
        getAsteroids(asteroids)
        if (asteroidCount == 1) {
          state.roids = 'asteroid'
          state.isAre = 'is'
        } else {
          state.roids = 'asteroids'
          state.isAre = 'are'
        }
        render ()
    }
  });

function getAsteroids(asteroids) {
  asteroids.map(function(asteroid) {
    state.asteroidCount +=1
    if (asteroid.is_potentially_hazardous_asteroid){
      state.hazardous += 1
    }
  })
  if (state.hazardous == 1){
    state.hazIsAre = 'is'
  } else {
    state.hazIsAre = 'are'
  }
}

function showInfo() {
  state.display = !state.display
  render ()
}

state.showInfo = showInfo

function render () {
  ReactDOM.render(App(state), document.getElementById('app'))
}
