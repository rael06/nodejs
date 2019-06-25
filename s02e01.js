let http = require("http");
const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(
		"<!DOCTYPE html>" +
		"<html>" +
			"<head>" +
				'<meta charset="utf-8" />' +
				"<title>Hello from NodeJS</title>" +
			"</head>" +
			"<body>" +
				"<strong>Hello</strong>" +
			"</body>" +
		"</html>"
	);
	res.end();
});

server.listen(3000);

