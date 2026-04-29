const http = require("http")

const server = http.createServer(function (req, res) {
    if (req.url === "/fake") {
        res.end("Its fake request");
    }
    res.end("Hello Rishi its your Private Server")
});

server.listen(1717)