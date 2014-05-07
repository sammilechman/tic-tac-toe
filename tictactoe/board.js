(function (root) {

  var Tictactoe = root.Tictactoe = (root.Tictactoe || {});

  var Board = Tictactoe.Board = function() {
    this.gamespace = [[null, null, null],[null, null, null],[null, null, null]];
  };

  Board.prototype.display = function() {
    for (var r = 0; r < 3; r++) {
      var newRow = '';
      for (var c = 0; c < 3; c++) {
        newRow += (this.gamespace[r][c] === null ?
            " _" : " " + this.gamespace[r][c]);
      }
      console.log(newRow);
    }
  };

  Board.prototype.empty = function(row, col, mark) {
    if (this.gamespace[row][col] === null) {
      this.placeMark(row, col, mark);
    } else {
      console.log("Not a valid move.");
    }
  };

  Board.prototype.placeMark = function(row, col, mark) {
    this.gamespace[row][col] = mark;
  };

  module.exports = Board;


})(this);