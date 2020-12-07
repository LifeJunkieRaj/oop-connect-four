import { Game } from './game.js'
let game;
function updateUI(){
    if (game) {
        document.getElementById('board-holder').classList.remove('is-invisible')
        document.getElementById('game-name').innerHTML = game.getName()
        document.getElementById('click-targets').classList.add(game.curPlayer === 1 ? 'black' : 'red')
        document.getElementById('click-targets').classList.remove(game.curPlayer === 1 ? 'red' : 'black')
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
        updateUI()
    })
    document.getElementById('click-targets').addEventListener('click', e => {
        game.playInColumn(e.target.id.split('-'))
        console.log(e)
        updateUI()
    })
})
