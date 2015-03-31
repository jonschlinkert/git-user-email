/*!
 * git-user-email <https://github.com/jonschlinkert/git-user-email>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var email = require('./');

describe('email', function () {
  it('should return the email from git config:', function () {
    assert(email() === 'jon.schlinkert@sellside.com');
  });
});
