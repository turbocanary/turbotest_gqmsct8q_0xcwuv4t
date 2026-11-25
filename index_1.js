function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = require('crypto').randomBytes(16).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}