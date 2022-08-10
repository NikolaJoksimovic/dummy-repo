// MODUELS every js file is a CommonJs module by default..

// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`Hello there ${name}`);
// }

// console.log(module);

require('./1-intro-utils')(require('./1-intro-globals').john);
console.log(require('./1-intro-alternative'));
// sayHi();

require('./1-intro-mindgranade');