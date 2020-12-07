import { Column } from './columns.js'
export class Game {
    constructor(name1, name2) {
        this.name1 = name1
        this.name2 = name2
        this.curPlayer = 1
        this.columns = []
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column())
        }
    }

    getName () {
        return `Player 1 ${this.name1} vs. Player 2 ${this.name2}`
    }
    playInColumn (col) {
        if (col[0] === 'column' && this.columns[col[1]].add(this.curPlayer)) this.curPlayer = this.curPlayer === 1 ? 2 : 1
    }
    getTokenAt(col, row){
        return this.columns[col].getTokenAt(row)
    }
}
