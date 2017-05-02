var supertest = require('supertest')
var test = require('tape')

var app = require('../server/server')

test('return api', function (t) {
  supertest(app)
    .get('/api')
    .end(function(err, res) {
        var response = typeof (res.body)
        var expected = 'object'
        t.equal(response, expected)
        t.end()
    })
})
