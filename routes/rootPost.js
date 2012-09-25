var config = require('../config')
var es = require('es')
var idgen = require('idgen')


module.exports = function(req, res, next) {
  if (req.body.key != config.key) {
    res.writeHead(401)
    return res.end('{"message": "Incorrect API key"}')
  }
  var id = idgen(18, 'abcdefghijklmnopqrstuvwyxz0123456789')
  es({
    path: '/'+id,
    method: 'PUT',
    res: res
  }, function(err, data) {
    data = JSON.parse(data)
    if (data.ok) {
      res.writeHead(200)
      return res.end(JSON.stringify({ok: true, id: id}))
    }
  })
}
