// export/import
//npm init es6 to upload your package.json files making it easier to link the 2 files
// create an index.js file
// export the greet function from greet.js
//export the greet functiion in index.js

import { greet } from './greet.js'; //put ', bcz it can be found in another folder.
console.log(greet('Ntombi')); //if you don't put curly bracket put defualt by export in greet file

import { yo } from './yo.js';
console.log(yo('Ntombi'));

import chalk from 'chalk'; // 1. install it => npm install --save chalk
// 2. import it => import chalk from 'chalk'; its in your pachage.json file. so, import chalk from chalk in

const styleMessage = chalk.bgRed.white(greet('Amira'));
console.log(styleMessage); 

import cowsay from 'cowsay'; //for cowsay module
console.log(chalk.bgMagentaBright.white(cowsay.say({
    text: greet('Ntombi')
})));

import figlet from 'figlet'; //use this for figlet module
figlet('Hello, Ntombi!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    }
)