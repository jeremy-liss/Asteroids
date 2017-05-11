var request = require('superagent')
var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./state')
var date = require('../lib/getDate')

var today = date.getToday()
var asteroids = ''
var asteroidCount = 0
var hazardous = 0
var isAre = ''
var roids = ''
var hazIsAre = ''

request
  .get('/api')
  .end(function(err, res){
    if (err) {
      throw err
    } else {
        asteroids = res.body.near_earth_objects[today]
        getAsteroids(asteroids)
        if (asteroidCount == 1) {
          roids = 'asteroid'
          isAre = 'is'
        } else {
          roids = 'asteroids'
          isAre = 'are'
        }
        render ()
    }
  });

function getAsteroids(asteroids) {
  asteroids.map(function(asteroid) {
    asteroidCount +=1
    if (asteroid.is_potentially_hazardous_asteroid){
      hazardous += 1
    }
  })
  if (hazardous == 1){
    hazIsAre = 'is'
  } else {
    hazIsAre = 'are'
  }
  render()
}

function AsteroidInfo () {
  return (
    <div>
      {hazardous > 0 ? <h1>Yes, {hazardous}!</h1> : <h1>No, not today!</h1>}
      <p>According to NASA {asteroidCount} {roids} {isAre} approaching Earth today, {hazardous} of which {hazIsAre} potentially hazardous</p>
    </div>
  )
}

function showInfo() {
  state.display = !state.display
  render ()
}

function App () {
  return(
    <div id='App'>
      <h1><a href='#' onClick={showInfo}>Are There any Potentially Hazardous Asteroids Approaching Earth Today?</a></h1>
      {state.display && <AsteroidInfo /> }
      <img src="http://space-facts.com/wp-content/uploads/asteroids.png" />
    </div>
  )
}


function render () {
  ReactDOM.render(App(), document.getElementById('app'))
}
