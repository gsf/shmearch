var es = require('es')

module.exports = function(req, res, next, index, path) {
  console.log('index', index)
  console.log('path', path)
  es({
    path: '/'+index,
    method: 'HEAD'
  }, function(err, data) {
  })
}
