(function (root) {

  var Board = require('./board.js');
  var Game = require('./game.js')

  var readline = require('readline');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var Tictactoe = root.Tictactoe = (root.Tictactoe || {});

  var HumanPlayer = Tictactoe.HumanPlayer = function(mark) {
    this.mark = mark;
  };

  HumanPlayer.prototype.getMove = function(callback) {
    // Callback is the "board#empty" function.
    var that = this;

    reader.question("Please enter the row you want: ", function(row) {
      reader.question("Please enter the col you want: ", function(col) {
        row = parseInt(row);
        col = parseInt(col);

        callback(row, col, that.mark);
      });
    });
  };

  module.exports = HumanPlayer;

})(this);