export class Game {
    constructor(name1, name2) {
        this.name1 = name1
        this.name2 = name2
        this.curPlayer = 1
    }

    getName () {
        return `Player 1 ${this.name1} vs. Player 2 ${this.name2}`
    }
    playInColumn () {
        this.curPlayer = this.curPlayer === 1 ? 2 : 1
    }
}
