var Stacks = require('./stacks.js');
var Game = require('./game.js');

var g = new Game();
var s = new Stacks();

console.log("\nWelcome to Hanoi, javascript style :)\n");

g.run(s);