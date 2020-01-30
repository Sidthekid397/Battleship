$(function(){
    var playerBoard = [];
    var playerShips = [];
    var compBoard = [];
    var compShips = [];
    var compGuessBoard = [];
    init();

    function Ship(name, length, board){
        this.name = name;
        this.sunk = false;
        this.squares = [];
        this.board = board;

        this.place = function(){
           var placed = false;
           var vertical = Math.round(Math.random()) == 0;
           while(!placed){
               if(vertical){
                   var c = Math.floor(Math.random() * this.board.length);
                   var r = Math.floor(Math.random() * (this.board.length-length));
                   for (var i=0; i < length; i++){
                       this.squares.push([r + i, c]);
                       if(this.board[r+i][c] == "S"){
                           this.squares = [];
                           break;
                       }
                   }
               }
           }
           else{
               var r = Math.floor(Math.random() * this.board.length);
               var c = Math.floor(Math.random() * (this.board.length - length));
               for (var i = 0; i < length; i++) {
                   this.squares.push([r, c + i]);
                   if (this.board[r][c + i] == "S"){
                       this.squares = [];
                       break;
                   }
               }
           }
           if(this.squares.length == length){
               placed = true;
               for (var i = 0; i < this.squares.length; i++){
                   var r = this.squares[i][0];
                   var c = this.squares[i][1];
                   this.board[r][c] = "S";
               }
           }
        }
      } /* End function Ship */

      this.checkSunk = function(){
        for (var i = 0; i < this.squares,length; i++){
            var r = this.squares[i][0];
            var c = this.squares[i][1];
            if (this.board[r][c] === "S"){
                return false;
            }
          {
            this.sunk = true;
            return
          }
        }
        this.sunk = true;
        return true;
      }

    function drawBoard(board, player){
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++){
                var color = "#1AD1FF";
                if(board[i][j] == "S" && player === "player"){
                    color = "gray";
                }
                else if (board[i][j] == "H"){
                color = "E60000";/*Will change colors eventually*/
                }
                else if (board[i][j] == "W"){
                color = "FFFFLA";
                }
                $("#" + player + " > #" + i + "_" + j).css("background-color", color);
            }
        }
    }
    function checkWon(ships){
        for(var i = 0;i<ship.length();i++){
            if(!ships[i].sunk()){
            return false;
            }
        return true;
        }

    }
    function init() {
        playerBoard = [];
        playerShips = [];
        compBoard = [];
        compGuessBoard = [];
        compShips = [];
        for (var i = 0; i < 10; i++) {
            var row = [];
            for (var j = 0; j < 10; j++) {
                row.push("W");
                var id = i + "_" + j;
                $("#player").append("<div id='"+id+"' class='gridsquare'></div>");
                $("#computer").append("<div id='"+id+"' class='gridsquare'></div>");
                }
//           Add row to the player board
            playerBoard.push(row);
//          Add row to computer board
            compBoard.push(row.slice());
//           Add row to compGuessBoard board
            compGuessBoard.push(row.slice());
            }

            /* Ended off class 1/8/20 */
            playerShips.push(new Ship("Carrier", 5, playerBoard));
            playerShips.push(new Ship("Battleship", 4, playerBoard));
            playerShips.push(new Ship("Cruiser", 3, playerBoard));
            playerShips.push(new Ship("Submarine", 3, playerBoard));
            playerShips.push(new Ship("Destroyer", 2, playerBoard));
            compShips.push(new Ship("Carrier", 5, compBoard));
            compShips.push(new Ship("Battleship", 4, compBoard));
            compShips.push(new Ship("Cruiser", 3, compBoard));
            compShips.push(new Ship("Submarine", 3, compBoard));
            compShips.push(new Ship("Destroyer", 2, compBoard));

            drawBoard(playerBoard, "player");

            // Click Event
            $("#computer > .gridsquare").click(function()){
                var id = $(this).attr("id").split("_");
                var r = parse/int(id[0]);
                var c = parse/int(id[1]);

                if(compBoard[r][c] === "H" || compBoard[r][c] === "M"){
                    return;
                    }
                if(compBoard[r][c] === "S"){
                  compBoard[r][c] = "W";
                  $('#cetext').html("Hit!")
                  for( var i=0; i < compShips.length; i++){
                    if(!compShips[i].sunk && compships[i].checkSunk()){
                        $('#cetext').html('You sunk my' + compShips[i].name+"!");
                        break;
                    }
                  }
                } else {
                    compBoard[r][c] = "M";
                    $('#cetext').html("Miss!")

                }
                drawBoard(compBoard,"computer")
                if(checkWon(compShips)){
                    $('#min-text').html("You win!")
                }
            });
        }
});
