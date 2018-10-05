/*!
 * git-user-email <https://github.com/jonschlinkert/git-user-email>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function(options) {
  var gc = gitconfig(extend({type: 'global'}, options && options.gitconfig));
  options = extend({cwd: '/', path: gc}, options);
  var config = parse.sync(options) || {};
  return config.user ? config.user.email : null;
};
