module.exports = function(n) {
	var s = n.toString();

	// get stuff before the dot
	var d = s.indexOf('.');
	var s2 = d === -1 ? s : s.slice(0, d);

	// insert spaces every 3 digits from the right
	for (var i = s2.length - 3; i > 0; i -= 3)
		s2 = s2.slice(0, i) + ' ' + s2.slice(i);

	// append fractional part
	if (d !== -1)
		s2 += s.slice(d);

	return s2;
};