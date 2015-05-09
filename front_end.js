/* psuedo
  -Using jQuery selected div with row/col argument
  -Apply player active class to that div.
*/
var drawPiece = function(player, row, col) {
  var tmp = "player" + player.toString(); //dont do css classes as numbers!
  $(".row_" + row + " .cell_" + col).addClass(tmp);
};

var clickedCol = function(event) {
  var x = $(this).attr("class");
  var col = parseInt(x.split('').pop()); //return col clicked //use parseInt instead.
  console.log(col);
  game.getColumn(col);
  var row = game.columnDrop(game.currentTurn);
  console.log(game.columnArray);
  console.log(game.currentTurn, row, col);
  drawPiece(game.currentTurn, row, col);
  // drawPiece here for the piece you want to draw like:
  // drawPiece("active-gopher", 0, col)    //note player name is the class without period
};

var getCell = function(rowId, cellId){
  return $('[data-row-id='+rowId+'] [data-cell-id='+cellId+']');
};

$(document).ready(function(){
    console.log($(".buttons > *").on('click', clickedCol));
});




