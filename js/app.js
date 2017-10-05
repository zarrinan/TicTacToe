

  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");// it's similar to window.download function;
  const game = {
  inProgress: true,
  currentPlayer: 'X',
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  checkWinner: function () {
  if  (((this.board[0] === this.board[1]) && (this.board[0] === this.board[2])) ||
       ((this.board[3] === this.board[4]) && (this.board[3] === this.board[5])) ||
       ((this.board[6] === this.board[7]) && (this.board[6] === this.board[8])) ||
       ((this.board[0] === this.board[3]) && (this.board[0] === this.board[6])) ||
       ((this.board[1] === this.board[4]) && (this.board[1] === this.board[7])) ||
       ((this.board[2] === this.board[5]) && (this.board[2] === this.board[8])) ||
       ((this.board[0] === this.board[4]) && (this.board[0] === this.board[8])) ||
       ((this.board[2] === this.board[4]) && (this.board[2] === this.board[6]))) {
  console.log('you win');
  document.querySelector('#winner').innerHTML = `${this.currentPlayer} wins!`;
  //setTimeout(function() {alert(`${this.currentPlayer} wins!`);}, 300); - it shows undefined
  this.inProgress = false;
  }
}}
  const cells = document.querySelectorAll('.row .cell');
  //add event listener to every cell and name the function(we can do that!!)
  for (let i = 0; i < cells.length; i+=1) {
    cells[i].addEventListener('click', function playCell() {
      if(game.inProgress) {
         cells[i].innerHTML = game.currentPlayer;
         // update the board array with currentPlayer value
         game.board[i] = game.currentPlayer;
         // check for winner
         game.checkWinner();
         // alternate player
         game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X'
         cells[i].removeEventListener('click', playCell)
      } else {
        alert('Game is over...:{')
      }
    })
  }
});
