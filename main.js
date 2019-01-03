let five = document.getElementById('5');
let game = document.getElementById('game');
// The players
const player1 = 'X';
const player2 = 'O';

// whose turn it is
let currentTurn = 1;
let movesMade = 0;



// inputs
const test = (e, player) => {

    if(currentTurn === 1){
        player = "X";
        currentTurn ++;
       } else {
           player = "O";
           currentTurn --;
       }

    let grid = document.getElementById(e.key); 
    switch (e.key) {
       case "1":
         grid.innerHTML = player;
         break;
       case "2":
         grid.innerHTML = player;
         break;
       case "3":
         grid.innerHTML = player;
         break;
       case "4":
         grid.innerHTML = player;
         break;
       case "5":
         grid.innerHTML = player;
         break;
       case "6":
         grid.innerHTML = player;
         break;
       case "7":
         grid.innerHTML = player;
         break;
       case "8":
         grid.innerHTML = player;
         break;
       case "9":
         grid.innerHTML = player;
         break; 
       default:
       console.log("error")  ;   
    }
}
game.addEventListener("keypress", test);
// winner
//score
