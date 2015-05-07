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
  var board = [];
  for (var i = 0; i < board_string.length; i++) {
    str = board_string[i];
    board.push(new Cell(i, str));
  }
  debugger
};

Board.prototype.play = function(player, cell){

};

// Board.prototype.play = function(player, cell){
//   debugger
// };


game = new Board("------------------------------------------");
game.play(1, 5)
// game.player1(0)


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
