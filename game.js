import { Column } from './columns.js'
import { VerticalWinCheck } from './win-inspector/vertical.js'
import { HorizontalWinCheck } from './win-inspector/horizontal.js'
export class Game {
    constructor(name1, name2) {
        this.name1 = name1
        this.name2 = name2
        this.current = 1
        this.winner = 0 //1 = player 1, 2 = player 2, 3 = tie
        this.columns = []
        for (let i = 0; i < 7; i++) {
            this.columns.push(new Column())
        }
    }

    getName () {
        switch (this.winner) {
            case 1:
                return `${this.name1} beat ${this.name2}`
            case 2:
                return `${this.name2} beat ${this.name1}`
            case 3:
                return `${this.name1} tied with ${this.name2}`
            default:
                return `${this.name1} vs. ${this.name2}`
        }

    }

    playInColumn (col) {
        if (col[0] === 'column' && this.columns[col[1]].add(this.current)) this.current = this.current === 1 ? 2 : 1
        if( this.checkForTie() ) this.winner = 3
        if (!this.winner) this.winner = this.checkVerticalWin()
        if (!this.winner) this.winner = this.checkHorizontalWin()
    }
    isColumnFull (col) {
        return this.winner > 0 ? true : this.columns[col].isFull
    }
    getTokenAt(col, row){
        return this.columns[col].getTokenAt(row)
    }
    checkForTie(){
        return this.columns.filter(x=>x.isFull).length === this.columns.length ? true : false
    }
    checkVerticalWin(){
        for (let i = 0; i < this.columns.length; i++) {
            let check = (new VerticalWinCheck(this.columns[i])).inspect()
            if (check) return check
        }
        return 0
    }
    checkHorizontalWin(){
        for (let i = 0; i < this.columns.length - 3; i++) {
            let check = (new HorizontalWinCheck([this.columns[i],this.columns[i + 1],this.columns[i + 2],this.columns[i + 3]])).inspect()
            if(check) return check
        }
    }
}
