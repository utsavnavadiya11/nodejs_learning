const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log('Request served!!');
    // // to end the server use...
    // // process.exit()
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>This is Home Page</h1>');
    // res.end();
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action = "/messege" method = "POST"><input type = "text"/><Button type = "submit" title = "submit"/></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if(url === '/messege') {
        fs.writeFileSync('dummy.txt', 'Form is Submitted')
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Response Recorded</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(5000);