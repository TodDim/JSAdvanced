class Player{
    constructor(nickName){
        this.nickName=nickName
        this.score=[]
    }
    addScore(score){
        if(!isNaN(score)&& score !== null){
            this.score.push(Number(score))
        }
        return this
    }

    get scoreCount(){
        return this.score.length
    }
    get highestScore(){
        return this.score.sort((a,b)=>b-a)[0]
    }
    get topFiveScore(){
        if(this.score.length<=5){
            return this.score.sort((a,b)=>b-a)
        }
        else{
           return this.score.sort((a,b)=>b-a).slice(0,5)
        }
    }
    toString(){
        if (this.score.length===0){
             return `${this.nickName}: []`
        }
        else{

            return `${this.nickName}: [${this.score.sort((a,b)=>b-a)}]`
        }
    }
}

let maria = new Player("Maria")
maria.addScore(350)
maria.addScore(779)
maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);