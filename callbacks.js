function Clock() {
  this.currentTime = new Date()
}

Clock.prototype.run = function() {

  var i = 0;
  var clock = this;

  function loopStep(){
    if (i === 5) {
      return;
    }
    root.setTimeout(function () {
      i += 1;
      click();
      loopStep();
      }, 5000
    );
  }

  loopStep();

  function click() {
    console.log("click");
    var curSeconds = clock.currentTime.getSeconds();
    clock.currentTime.setSeconds(curSeconds + 5);
    console.log(clock.currentTime);
  }
}

clock = new Clock();
clock.run();