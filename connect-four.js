import { Game } from "./game.js"
let game;
window.addEventListener("DOMContentLoaded", () => {
    let p1Name =  document.getElementById('player-1-name')
    let p2Name = document.getElementById('player-2-name')
    function enableDisableNewGame() {
        document.getElementById('new-game').disabled = p1Name.value === '' || p2Name.value === '' ? true : false
    }
   p1Name.addEventListener('keyup', enableDisableNewGame)
   p2Name.addEventListener('keyup', enableDisableNewGame)


})
