import { Game } from "./game.js"
let game;
function updateUI(){
    if (game) {
        document.getElementById('board-holder').classList.remove('is-invisible')
        document.getElementById('game-name').innerHTML = game.getName()
    }
}
window.addEventListener("DOMContentLoaded", () => {
    let p1Name =  document.getElementById('player-1-name')
    let p2Name = document.getElementById('player-2-name')
    let btnNewGame = document.getElementById('new-game')
    function enableDisableNewGame() {
        btnNewGame.disabled = p1Name.value === '' || p2Name.value === '' ? true : false
    }
    p1Name.addEventListener('keyup', enableDisableNewGame)
    p2Name.addEventListener('keyup', enableDisableNewGame)

    btnNewGame.addEventListener('click', (e) => {
        game = new Game(p1Name.value, p2Name.value)
        btnNewGame.disabled = true
        updateUI(e.target)
    })
    document.getElementById('click-targets').addEventListener('click', e => {
        game.playInColumn()
        updateUI()
    })
})
