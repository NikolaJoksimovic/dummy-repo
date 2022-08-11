// console.log('events')
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=>{
    console.log('data recieved');
});
customEmitter.on('response', ()=>{
    console.log('some other logic here');
});


// emiiting event must come after listenting('on')..
customEmitter.emit('response', 'john', 34); //Invoking the event..

