var React = require('react')

module.exports = function (props) {

  return (
    <div id='App'>
      <h1><a href='#' onClick={props.showInfo}>Are There any Potentially Hazardous Asteroids Approaching Earth Today?</a></h1>
      {props.display && <AsteroidInfo /> }
      <img src="http://space-facts.com/wp-content/uploads/asteroids.png" />
    </div>
  )

  function AsteroidInfo () {
    return (
      <div>
        {props.hazardous > 0 ? <h1>Yes, {props.hazardous}!</h1> : <h1>No, not today!</h1>}
        <p>According to NASA {props.asteroidCount} {props.roids} {props.isAre} approaching Earth today, {props.hazardous} of which {props.hazIsAre} potentially hazardous</p>
      </div>
    )
  }
}
