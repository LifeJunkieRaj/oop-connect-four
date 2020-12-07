export class VerticalWinCheck {
    constructor (column){
        this.column = column
    }
    inspect () {
        let count = 1
        for (let i = 1; i < this.column.tokens.length; i++) {
            if(this.column.tokens[i] && this.column.tokens[i] === this.column.tokens[i - 1]) count ++
            else count = 1
            if (count === 4) return this.column.tokens[i]
        }
        return 0
    }
}
