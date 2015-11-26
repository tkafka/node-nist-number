var nistNumber = require('../nist-number');

exports.test = function(t) {
	t.equals(nistNumber(123456), '123 456');
	t.equals(nistNumber(-123456), '-123 456');
	t.equals(nistNumber(-123456.7891), '-123 456.7891');

	t.equals(null, nistNumber(null));
	t.equals(null, nistNumber('not a number'));
	t.equals(null, nistNumber({lol: 'object'}));

	t.done();
};