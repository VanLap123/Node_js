const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((red,res) => {
    res.statusCode =200;
    res.setHeader("Content-Type","text/html");
    res.end(
    "<h1>Hello world</h1><p>This is a HTML response</p><ol><li>One</li><li>Two</li><li>Three</li></ol>");

});
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
