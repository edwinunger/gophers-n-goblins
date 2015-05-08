Cell = function(str_index, str){
  this.id = parseInt(str_index);
  this.str = str;
  this.column = parseInt(str_index) % 7;
  this.row = Math.floor(parseInt(str_index) / 7);
  this.leftDiag = 5;
  this.rightDiag = 5;
};

// game.board[0].leftDiag = 0
// leftDiag1
// leftDiag2
// leftDiag3
// leftDiag4
// leftDiag5
// leftDiag6

// rightDiag1
// rightDiag2
// rightDiag3
// rightDiag4
// rightDiag5
// rightDiag6

Board = function(board_string){
  this.board = [];
  this.currentTurn = 0;
  for (var i = 0; i < board_string.length; i++) {
    str = board_string[i];
    this.board.push(new Cell(i, str));
  }
};

Board.prototype.changePlayer = function() {
  this.currentTurn = ((this.currentTurn + 1) % 2);
};

// NEEDS TESTING
Board.prototype.getRow = function(row) {
  this.rowArray = [];
  for(i=41; i>=0; i--) {
    if (this.board[i].row === row) {
      this.rowArray.push(this.board[i]);
    }
  }
};

Board.prototype.getColumn = function(column) {
  this.columnArray = [];
  for(i=41; i >= 0; i--) {
    if (this.board[i].column === column) {
      this.columnArray.push(this.board[i]);
    }
  }
  this.columnDrop(this.currentTurn);
};

Board.prototype.countUp = 0;

Board.prototype.columnDrop = function(player_num) {
  var players = ["x", "o"];
  if ((this.columnArray[this.countUp].str !== "-") && (this.columnArray[this.countUp].row === 0)) {
    console.log('Error: Please try another column.');
  }
  else if (this.columnArray[this.countUp].str === "-") {
    // debugger
    this.columnArray[this.countUp].str = players[player_num];
    this.countUp = 0;
  }
  else if (this.columnArray[this.countUp].str !== "-") {
    this.countUp++;
    this.columnDrop(player_num);
  }
};

Board.prototype.leftDiag = function() {
  for (i=0; i<=41; i+=8) {
    this.board[i].leftDiag = 0;
  }
};

Board.prototype.getLeftDiag = function() {
  this.leftDiagArray = [];
  for(i=41; i >= 0; i--) {
    if (this.board[i].leftDiag === 0) {
      this.leftDiagArray.push(this.board[i]);
    }
  }
};



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
game.getColumn(0); // selects column number and puts all cells into an array of that column
// also calls columnDrop, which accepts player number and drops into column based on player id
// game.getColumn(0);
// game.to_s();

game.changePlayer();
game.getColumn(0);
game.changePlayer();
game.getColumn(0);
game.changePlayer();
game.getColumn(0);



game.leftDiag;
// game.getLeftDiag;

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
