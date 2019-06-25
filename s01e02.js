let fs = require('fs');

fs.copyFile('./s01e02.js', './s01e02-copy.js', function (err) {
	if (err) {
		console.log('An error occured :', err);
	}
});