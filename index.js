var unixify = require('unixify')

module.exports = function(path) {
  if (!path) return '/'

  var neg = path[0]==='!'
  if (neg) path = path.slice(1)

  path = unixify(path, true) // true == always, regardless of OS

  if (path[0]==='.') path = path.slice(1)
  if (path[0]!=='/') path = '/' + path

  return neg ? '!' + path : path
}
