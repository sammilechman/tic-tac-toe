var Board = require('./board.js');
var Game = require('./game.js');

var b = new Board();
var g = new Game();

console.log('Welcome to Tic Tac Toe!');

g.play(g.p1);