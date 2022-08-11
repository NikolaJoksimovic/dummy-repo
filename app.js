// const {writeFileSync} = require('fs');
// for(let i = 0; i < 10000; i++){
//     writeFileSync('./folder/big.strams-big.txt', `hello world ${i}\n`, {flag: 'a'});
// }
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res)=>{
    const fileStream = fs.createReadStream('./folder/big.strams-big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
})

server.listen(5000);