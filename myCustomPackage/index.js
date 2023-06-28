const up = require('upper-case').upperCase

function greet(name){
    console.log(`my name is ${name}`);
    console.log(up("sangay is up"));
}

module.exports = greet;

greet("tenzin")