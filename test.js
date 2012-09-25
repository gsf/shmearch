var assert = require('assert')
var request = require('request')

request.post({
    url: 'http://127.0.0.1:4242/',
    json: {
      key: 'sekrit'
    }
  }, function(err, res, body) {
    console.log(body)
  }
)
