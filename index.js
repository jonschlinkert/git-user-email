/*!
 * git-user-email <https://github.com/jonschlinkert/git-user-email>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

const shell = require('shelljs');

module.exports = shell.exec('git config --get user.email', {
  silent: true
}).output.trim();
