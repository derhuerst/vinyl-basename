var path =		require('path');
var through =	require('through');



module.exports = through(function (file) {
	file.basename = path.basename(file.path);
	this.queue(file);
});