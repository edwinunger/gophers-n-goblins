Cell = function(){
};

Cell.prototype.get_row = function(){
};

Cell.prototype.get_column = function(){
};

Board = function(board_string){
  var board_string = board_string;
  var board = []
};


game = new Board("------------------------------------------");


// Tree = function() {

//   FRUIT_BEARING_AGE = 5;
//   MAX_AGE = 50;

//   this.age = 0;
//   this.height = 0;
//   this.orangeCount = 0;
//   this.isAlive = true;
// };

// Tree.prototype.grow = function() {
//   this.orangeCount = 0;
//   this.age ++;
//   this.height += 10;

//   if (this.age >= FRUIT_BEARING_AGE){
//     this.orangeCount += Math.floor((Math.random() * 50) + 1);
//   };

//   if (this.age > MAX_AGE) {
//     this.isAlive = false;
//   };
// };

// Tree.prototype.dropOrange = function() {
//   this.orangeCount--;
//   return new Orange;
// };

// Tree.prototype.pickOrange = function() {
//   this.orangeCount--;
//   return new Orange;
// };

// Orange = function() {
//   this.diameter = Math.floor((Math.random() * 6) + 1);
// };
