export class Column {
    constructor(){
        this.tokens = [null, null, null, null, null, null]
    }
    add(player){
        for (let i = 5; i >= 0; i--) {
            if (this.tokens[i] === null) return this.tokens[i] = player
        }
        return false
    }
    getTokenAt(spot){
        const token = this.tokens[spot]
        return token ? token : null
    }
}
