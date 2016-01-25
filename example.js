var validate = require('./');

// will be an error if the inline js has syntax errors
var error = validate('<html><script>window.alert(beep');

console.log(error);
