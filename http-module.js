const http = require('http');
const server = http.createServer((req,res)=>{
    
    if(req.url === '/'){
        res.end('This is the HOME page.');
    }else if(req.url === '/about'){
        res.end('This is the ABOUT page.');
    }else{
        res.end(`
            <h1>Oops!</h1>
            <p>We can't..</p>
            <a href='/'>back home</a>
        `)
    }
})

server.listen(5000);