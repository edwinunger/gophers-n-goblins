Cell = function(str_index, str){
  this.str = str;
  this.row =
};

Cell.prototype = function(){
};

// class Cell
//   attr_reader :row, :box, :column
//   attr_accessor :num, :possi
//   def initialize(str_index, num)
//     @num = num == 0 ? nil : num # Cell has a num
//     @row = str_index / 9
//     @column = str_index % 9
//     @box = [ [0, 1, 2],
//              [3, 4, 5],
//              [6, 7, 8] ][row / 3][column / 3]
//     @possi = (1..9).to_a if !@num
//     @possi ||= []
//   end
// end

Cell.prototype.get_row = function(){
};

Cell.prototype.get_column = function(){
};

Board = function(board_string){
  var board = [];
  for (var i = 0; i < board_string.length; i++) {
    // board_string[i]
    str = board_string[i];
    board.push(new Cell(i, str));
  }
  debugger
};


game = new Board("------------------------------------------");

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
