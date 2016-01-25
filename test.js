var test = require('tap').test;
var validate = require('./');

test('good inline js', t => {
  var input = '<script>window.foo = \'bar\';</script>';
  var actual = validate(input);
  var expected = null;

  t.deepEqual(actual, expected);
  t.end();
});

test('bad inline js', t => {
  var input = '<script>window.foo = bar bas;</script>';
  var actual = validate(input);

  t.ok(actual instanceof Error);
  t.end();
});
