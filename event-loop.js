const {readFile, writeFile} = require('fs');

console.log('started our first task');
// Check file path!!

try{
    const file = readFile('./package.json', 'utf8', (err, data)=>{
        if(err){
            console.log("Nah buddy.. " + err);
        }else{
            console.log(data);
            console.log('Completed first task.')
        }
    });
}catch(err){
    console.log("Nah buddy.. " + err);
}

console.log('starting our next task');
// let seconFile = readFile('./package-lock.json','utf8')