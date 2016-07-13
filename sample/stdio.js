var scanf = require('scanf');
 
console.log('Pleas input your name');
var name = scanf('%s');
 
console.log('Pleas input your age');
var age = scanf('%d');
 
console.log('your name [%s] type: [%s]', name, typeof name);
console.log('your age [%s] type: [%s]', age, typeof age);