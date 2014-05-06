Function.prototype.myBind = function(obj) {
  return this.call(obj);
}

var cat = {
  age: 5,
  n: "Sam",

  logName: function() {
    console.log(this.n);
  }
};

var dog = {
  n: "Dog"
}

// var greet = function() {
//   console.log(this.n);
// }

cat.logName.myBind(cat);
cat.logName();

cat.logName.myBind(dog);
// dog.logName();
