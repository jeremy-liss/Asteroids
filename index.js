var request = require('superagent')
var React = require('react')
var ReactDOM = require('react-dom')

var state = require('./state')

state.path = '/'

var asteroids = ''
var asteroidCount = 0
var hazardous = 0
var isAre = ''
var roids = ''
var hazIsAre = ''

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

request
  .get('https://api.nasa.gov/neo/rest/v1/feed?start_date='+today+'&end_date='+today+'&api_key=[inset api key])
  .end(function(err, res){
    if (err) {
      throw err
    } else {
        asteroids = res.body.near_earth_objects[today]
        asteroidCount = res.body.element_count
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
