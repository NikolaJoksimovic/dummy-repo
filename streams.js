// const {writeFileSync} = require('fs');
// for(let i = 0; i < 10000; i++){
//     writeFileSync('./folder/big.strams-big.txt', `hello world ${i}\n`, {flag: 'a'});
// }

const {createReadStream} = require('fs');
const stream = createReadStream('./folder/big.strams-big.txt', {highWaterMark:90000, encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(result);
})
stream.on('error', (err)=>{
    console.log(err);
})