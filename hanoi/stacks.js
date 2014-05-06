(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});



var Stacks = Hanoi.Stacks = function() {
  this.stacks = this.stacks || [[3, 2, 1], [], []];
}

Stacks.prototype.displayStacks = function() {
  // Will improve this later.
  console.log(this.stacks);
};

Stacks.prototype.moveDisk = function(from, to) {

  if (this.checkValidMove(from, to)) {
    this.stacks[to].push( this.stacks[from].pop() );
  } else {
    console.log("Invalid move");
  }

};

Stacks.prototype.checkValidMove = function(stackFrom, stackTo) {
  // console.log(this.stacks[stackFrom].slice(-1)[0]);
  // console.log(this.stacks[stackTo].slice(-1)[0]);
  if (this.stacks[stackFrom].length > 0 &&
    (this.stacks[stackTo].length === 0 ||
      this.stacks[stackFrom].slice(-1)[0] < this.stacks[stackTo].slice(-1)[0])){
    return true;
    }
  return false;
};

module.exports = Stacks;

})(this);