var http = require('http')
var scalpel = require('scalpel')
var stack = require('stack')
var rut = require('rut')

var port = process.env.PORT || 4242

http.createServer(stack(
  scalpel,
  function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    next()
  },
  rut.post('/', require('./routes/rootPost')),
  rut(/^\/([a-z0-9]{16})(|\/.*)$/, require('./routes/esIndex'))
)).listen(port, function() {
  console.log('Listening on ' + port)
})
