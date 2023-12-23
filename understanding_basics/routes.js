const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/messege" method="POST"><input type="text" name="message"/><Button type = "submit">Submit</Button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(url === '/messege') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            const messege = parsedbody.split('=')[1];
            fs.writeFileSync('dummy.txt', messege)
        });
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Response Recorded</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}

module.exports = requestHandler;
// or
// module.exports = {
//     requestHandler: requestHandler,
//     msg: 'jbdbdedbeub',
// }
// or
// module.exports.requestHandler = requestHandler 