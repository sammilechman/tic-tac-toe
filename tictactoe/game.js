(function (root) {
  var Board = require('./board.js');
  var HumanPlayer = require('./humanPlayer.js');

  var Tictactoe = root.Tictactoe = (root.Tictactoe || {});

  var Game = Tictactoe.Game = function() {
    this.board = new Board();
    this.p1 = new HumanPlayer('o');
    this.p2 = new HumanPlayer('x');
  }

  Game.prototype.won = function(player) {
    console.log(this);
    var didWin = false;

    for (var i = 0; i < 3; i++) {
      // Check rows first
      if (this.board[i][0] === this.board[i][1] &&
          this.board[i][1] === this.board[i][2] &&
          this.board[i][0] != null) {
            didWin = true;
      }
      // Check cols next
      if (this.board[0][i] === this.board[1][i] &&
          this.board[1][i] === this.board[2][i] &&
          this.board[0][i] != null) {
            didWin = true;
      }
    }
    // Check diags last
    if (this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2] &&
        this.board[0][0] != null) {
      didWin = true;
    }
    if (this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0] &&
        this.board[0][2] != null) {
      didWin = true;
    }

    if (didWin) {
      this.winner(player);
    } else {
      this.togglePlayer(player);
    }


  };

  Game.prototype.togglePlayer = function(currentPlayer) {
    if (currentPlayer.mark === p1.mark) {
      this.play(p2);
    } else {
      this.play(p1);
    }
  }

  Game.prototype.winner = function(player) {
    console.log("And the winner is...");
    root.setTimeout(function() {
      console.log(player.mark);
    }, 2000)
    reader.close();

  };

  Game.prototype.play = function(player) {
    this.board.display();
    player.getMove();
    // (function() {
   //    player.getMove(this.board.empty.bind(this.board));
   //  })();


  }

  module.exports = Game;


})(this);