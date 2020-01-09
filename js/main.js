$(function() {
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

        this.place = function() {
           var placed = false;
           var vertical = Math.round(Math.random()) == 0;
           while(!placed) {
            if(vertical) {
                var c = Math.floor(Math.random() * this.board.length);
                var r = Math.floor(Math.random() * (this.board.length-length));
                for (var i=0; i < length; i++) {
                    this.squares.push([r + i, c]);
                    if(this.board[r+i][c] == "S") {
                        this.squares = [];
                        break;his.squares = [];
                    }
                }
            } else {
                var r = Math.floor(Math.random() * this.board.length);
                var c = Math.floor(Math.random() * (this.board.length - length));
                for (var i = 0; i < length; i++) {
                    this.squares.push([r, c + i]);
                    if (this.board[r][c + i] == "S") {
                        this.squares = [];
                        break;
                }
            }
           }
           if(this.squares.length == length) {
                placed = true;
                for (var i = 0; i < this.squares.length; i++) {
                    var r = this.squares[i][0];
                    var c = this.squares[i][1];
                    this.board[r][c] = "S";
                }
           }
           }
        }
        this.place();
    }
    function drawBoard(board, player) {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                var color = "#1AD1FF";
                if(board[i][j] == "S" && player === "player") {
                    color = "gray";
                }
                $("#" + player + " > #" + i + "_" + j).css("background-color", color);
            }
        }
    }

    function init() {
        playerBoard = [];

        compBoard = [];
        compGuessBoard = [];
        for (var i = 0; i < 10; i++) {
            var row = [];
            for (var j = 0; i < 10; i++) {
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
        }
});