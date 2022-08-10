// OS MODULE **************************************************

// const os = require('os');
// console.log(os.userInfo())
// console.log(os.uptime())

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);

// PATH MODULE ************************************************

// const path = require('path');

// console.log(path.sep);
// const filePath = path.join('/folder/', 'subfolder', 'text.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "content", 'subfolder', 'text.txt');
// console.log(absolute);

// FILE SYSTEM MODULE (FS)  ***********************************

// SYNCHRONOUS MODE
// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./folder/first.txt', 'utf8');
// const second = readFileSync('./folder/second.txt', 'utf8');

// writeFileSync('./folder/third.txt','Hello world! ' + first  + ' ' + second, {flag: ''}
// );
// ASYNCHRONOUS MODE
const {readFile, writeFile} = require('fs');


readFile('./folder/third.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }else{
        const first = result;
        readFile('./folder/second.txt','utf8',(err, result)=>{
            if(err){
                console.log(err);
                return;
            }else{
                const second = result;
                writeFile('./folder/result-async.txt',`Here is the result: ${first}, ${second}`, (err,result)=>{
                    if(err){
                        console.log(err);
                        return
                    }else{
                        console.log(result);
                    }
                })
            }
        })
    }
})
