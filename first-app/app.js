
const http = require('http');

const  server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.sendFile(path.join(__dirname, '/SimpleContactForm.html'));
        res.end();
    }
});



server.listen(3000);

console.log('Listening on port 3000...');