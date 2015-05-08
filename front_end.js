/* psuedo
  -Using jQuery selected div with row/col argument
  -Apply player active class to that div.
*/
var boardDisplay = function  (player, row, col) {
  $(".row_" + row + " .cell_" + col).addClass(player);
};

/* psuedo
  -Using jQuery listner:
    -onclick, pass player and col to our dropPiece function
    -This function will call drop col
*/
var DropPiece = function(player, col) {};

$(document).ready(function(){

    $(".buttons > *").on('click', function(event){
      //$(this).css("border", "solid black");

      console.log($(this).attr("class"));
    });

});




