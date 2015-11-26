Formats numbers into groups of three digits separated with space, as used by [NIST](https://en.wikipedia.org/wiki/Decimal_mark) et. al.

See [tests](https://github.com/tkafka/node-nist-number/blob/master/test/test-nist-number.js).

Install:

	npm install --save nist-number

Use:

	var nistNumber = require('nist-number')

	nistNumber(123456) // = '123 456'
	nistNumber(-123456) // = '-123 456'
	nistNumber(-123456.7891 // = '-123 456.7891'

	nistNumber(undefined) // = null
	nistNumber(null) // = null
	nistNumber('string is not a number') // = null
	nistNumber({lol: 'object'}) // = null
