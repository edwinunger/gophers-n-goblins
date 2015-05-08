Cell = function(str_index, str){
  this.id = parseInt(str_index);
  this.str = str;
  this.column = parseInt(str_index) % 7;
  this.row = Math.floor(parseInt(str_index) / 7);
};

Cell.prototype = function(){
};

// Cell.prototype.get_row = function(){
// };

// Cell.prototype.get_column = function(){
// };
Board = function(board_string){
  this.board = [];
  for (var i = 0; i < board_string.length; i++) {
    str = board_string[i];
    this.board.push(new Cell(i, str));
  }
};

Board.prototype.getColumn = function(column) {
  this.columnArray = [];
  for(i=41; i >= 0; i--) {
    if (this.board[i].column === column) {
      this.columnArray.push(this.board[i]);
    }
  }
  this.columnDrop();
};

Board.prototype.countUp = 0;

Board.prototype.columnDrop = function() {
  if (this.columnArray[this.countUp].str !== "x") {
    this.columnArray[this.countUp].str = "x";
    this.countUp = 0;
  }
  else if (this.columnArray[this.countUp].str === "x") {
    this.countUp++;
    this.columnDrop();
  }
};

Board.prototype.to_s = function(){
  for (var i = 0; i < this.board.length; i++) {
    for (var y = 0; y < 6; y++) {
      console.log(this.board[i].str)
    }
    console.log("\n")
    // console.log("String: " + this.board[i].str);
    // console.log("Column: " + this.board[i].column)
    // console.log("Row: " + this.board[i].row)
  }
}



// Board.prototype.play = function(player, cell){
//   // On board cell "cell" (so 5th cell), for player 1
//   // Change .str property from "-" to "goblin"
// };


// Board.prototype.play = function(player, cell){
//   debugger
// };

// Board.prototype.nextAvailable = function(column) {
//   for (var i = 0; i < board.length; i++) {

//   }
// };


game = new Board("------------------------------------------");
// game.nextAvailable(5);
// game.play(1, 5)
// game.play(2, 6)
// game.player1(0)
game.getColumn(0);
game.getColumn(1);
// game.to_s();

//console.log("-") console.log("-");



// game.player2

// class Guess
//   include Navigation, SolvingLogic
//   attr_reader :valid, :board
//   def initialize(board_string)
//     @valid = true
//     @board = board_string.each_char.with_index.map { |char, index| Cell.new(index, char.to_i) }
//     solve
//   end



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
