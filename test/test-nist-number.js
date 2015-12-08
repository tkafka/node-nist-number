var nistNumber = require('../nist-number');

exports.test = function(t) {
	// numbers
	t.equals(nistNumber(123456), '123 456');
	t.equals(nistNumber(-123456), '-123 456');
	t.equals(nistNumber(-123456.7891), '-123 456.7891');

	// strings
	t.equals(nistNumber('123456'), '123 456');
	t.equals(nistNumber('-123456'), '-123 456');
	t.equals(nistNumber('-123456.7891'), '-123 456.7891');

	// strange stuff
	t.equals(nistNumber(undefined), null);
	t.equals(nistNumber(null), null);
	t.equals(nistNumber('string that is not a number'), null);
	t.equals(nistNumber({lol: 'object'}), null);

	t.done();
};
