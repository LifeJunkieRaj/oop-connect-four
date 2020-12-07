import { Game } from './game.js'
let game;
function updateUI(){
    if (game) {
        document.getElementById('board-holder').classList.remove('is-invisible')
        document.getElementById('game-name').innerHTML = game.getName()
        document.getElementById('click-targets').classList.add(game.curPlayer === 1 ? 'black' : 'red')
        document.getElementById('click-targets').classList.remove(game.curPlayer === 1 ? 'red' : 'black')

        for (let i = 6; i >= 0; i--) { //loop through columns
            for (let j = 0; j < 6; j++) { //loop through rows
                const el = document.createElement('div')
                el.classList.add('token')
                switch (game.getTokenAt(i, j)) {
                    case 1:
                        el.classList.add('black')
                        break
                    case 2:
                        el.classList.add('red')
                        break
                }
                document.getElementById(`square-${j}-${i}`).innerHTML = '';
                document.getElementById(`square-${j}-${i}`).appendChild(el)
            }
        }
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
        updateUI()
    })
})
