let express = require ('express');
let app = express();

app.get('/', function (req, res) {
	res.send('Hello from home');
});

app.get('/about', function (req, res) {
	res.send('About me');
});

app.get('/work', function (req, res) {
	res.send('My work');
});

app.listen(3000, function () {
	console.log('Server ready');
});
