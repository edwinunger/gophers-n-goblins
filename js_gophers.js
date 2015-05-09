Cell = function(str_index, str){
  this.id = parseInt(str_index);
  this.str = str;
  this.column = parseInt(str_index) % 7;
  this.row = Math.floor(parseInt(str_index) / 7);
  this.leftDiag = 5;
  this.rightDiag = 5;
};

Board = function(board_string){
  this.board = [];
  this.winner = false;
  this.currentTurn = 0;
  for (var i = 0; i < board_string.length; i++) {
    str = board_string[i];
    this.board.push(new Cell(i, str));
  }
};

Board.prototype.changePlayer = function() {
  this.currentTurn = ((this.currentTurn + 1) % 2);
};

Board.prototype.getRow = function(row) {
  this.rowArray = [];
  for(var i=41; i>=0; i--) {
    if (this.board[i].row === row) {
      this.rowArray.push(this.board[i]);
    }
  }
};

Board.prototype.getColumn = function(column) {
  this.columnArray = [];
  for(var i=41; i >= 0; i--) {
    if (this.board[i].column === column) {
      this.columnArray.push(this.board[i]);
    }
  }
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
    var row_value = this.countUp;
    this.countUp = 0;
    console.log("am i here?");
    console.log(row_value, "we should return right now.");
    return row_value;
  }
  else if (this.columnArray[this.countUp].str !== "-") {
    this.countUp++;
    var row_value = this.columnDrop(player_num);
  }
  console.log("We got outside of the loop.", row_value);
  // return this.
  return row_value
};

Board.prototype.play = function(){
  this.getColumn(0); // selects column number and puts all cells into an array of that column
  this.columnDrop(this.currentTurn);
  this.changePlayer();
  this.getWinnerCol();
  // this.getWinnerRow();
  if (this.winner) {
    console.log("Game Over!");
  }
}

Board.prototype.leftDiag = function() {
  for (var i=0; i<=41; i+=8) {
    this.board[i].leftDiag = 0;
  }
};

Board.prototype.getLeftDiag = function() {
  this.leftDiagArray = [];
  for(var i=41; i >= 0; i--) {
    if (this.board[i].leftDiag === 0) {
      this.leftDiagArray.push(this.board[i]);
    }
  }
};

Board.prototype.getWinnerCol = function(){
  var stringArray = [];
  for(var i=0; i <= 5; i++) {
    if (this.columnArray[i].str !== "-") {
      stringArray.push(this.columnArray[i].str);
      var letterString = stringArray.join("");
      var xCapture = /xxxx/;
      var oCapture = /oooo/;
    }
  }
  if (xCapture.test(letterString)) {
    console.log("Player 1 is a winner!");
    this.winner = true;
  }
  else if (oCapture.test(letterString)) {
    console.log("Player 2 is a winner!");
    this.winner = true;
  }
  else {
    this.winner = false;
  }
};

// Board.prototype.getWinnerRow = function(){
//   var stringArray = [];
//   for(var i=0; i <= 6; i++) {
//     if (this.rowArray[i].str !== "-") {
//       stringArray.push(this.rowArray[i].str);
//       var letterString = stringArray.join("");
//       var xCapture = /xxxx/;
//       var oCapture = /oooo/;
//     }
//   }
//   if (xCapture.test(letterString)) {
//     console.log("Player 1 is a winner!");
//     this.winner = true;
//   }
//   else if (oCapture.test(letterString)) {
//     console.log("Player 2 is a winner!");
//     this.winner = true;
//   }
//   else {
//     this.winner = false;
//   }
// };


game = new Board("------------------------------------------");

game.play()

