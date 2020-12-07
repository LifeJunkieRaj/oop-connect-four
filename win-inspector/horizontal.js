export class HorizontalWinCheck{
    constructor(columns){
        this.columns = columns
    }
    inspect(){
        for (let i = this.columns[0].tokens.length - 1; i >= 0; i--) {
            if (this.columns.filter(x=>x.tokens[i] === this.columns[0].tokens[i] && x.tokens[i] !== null ).length === 4) return this.columns[0].tokens[i]
        }
        return 0
    }
}
