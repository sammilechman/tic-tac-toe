(function (root) {
  var readline = require('readline');

  var Stacks = require('./stacks.js');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function() {
    this.stacks = new Stacks();
  };

  Game.prototype.getUserInput = function(callback) {
    var that = this;
    reader.question("Select stack to move from:\n", function(from) {
      reader.question("Select stack to move to:\n", function(to) {

        from = parseInt(from);
        to = parseInt(to);

        callback(from, to);
        that.run();
      });
    });
  }

  Game.prototype.winChecker = function() {
    for (var i = 1; i < 3; i++) {

      if (String(this.stacks.stacks[i]) === String([3,2,1])) {
        reader.close();
        console.log("\nYou won!\n");
        return true;
      }
    }
    return false;
  }

  Game.prototype.run = function() {


    if (!this.winChecker()) {
      this.stacks.displayStacks();
      // console.log(this);
      this.getUserInput(this.stacks.moveDisk.bind(this.stacks));
    }

  }

  module.exports = Game;

})(this);
