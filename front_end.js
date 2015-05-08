/* psuedo
  -Using jQuery selected div with row/col argument
  -Apply player active class to that div.
*/
var drawPiece = function(player, row, col) {
  $(".row_" + row + " .cell_" + col).addClass(player);
};

var clickedCol = function(event) {
  var x = $(this).attr("class");
  var col = parseInt(x.split('').pop()); //return col clicked //use parseInt instead.
  console.log(col);
  drawPiece("active-gopher", 0, col)    //note player name is the class without period

  //do your shit here
};

var getCell = function(rowId, cellId){
  return $('[data-row-id='+rowId+'] [data-cell-id='+cellId+']');
};

$(document).ready(function(){
    console.log($(".buttons > *").on('click', clickedCol));
});




