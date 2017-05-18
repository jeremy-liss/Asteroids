var state = require('../client/state')

module.exports = function (asteroids) {
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
  if (state.asteroidCount == 1) {
    state.roids = 'asteroid'
    state.isAre = 'is'
  } else {
    state.roids = 'asteroids'
    state.isAre = 'are'
  }
}
