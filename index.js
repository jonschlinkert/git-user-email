/*!
 * git-user-email <https://github.com/jonschlinkert/git-user-email>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function gitUserEmail(opts) {
  opts = extend({cwd: '/', path: gitconfig()}, opts);
  var config = parse.sync(opts);
  if (typeof config === 'object' && config.hasOwnProperty('user')) {
    return config.user.email;
  }
  return null;
};
