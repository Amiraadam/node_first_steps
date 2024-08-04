// console.log("Happy new week, ");
let name = 'Amira';
//console.log('Hello, '+name);

export function greet(name) {

   return "hello, "+name;
}
//console.log(greet('Amira')); //always do console.log to excute your function

export function yo(name){
   return "yo, "+name;
}

import figlet from 'figlet';

import cowsay from 'cowsay';
const cowMessage=cowsay.say({
   text:'Hello World!'
})
console.log(cowMessage);