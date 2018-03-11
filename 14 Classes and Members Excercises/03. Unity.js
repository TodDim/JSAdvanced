class Rat {
    constructor(name) {
        this.name = name
        this.unitedRats=[]
    }

    unite(rat) {
        if(rat instanceof Rat){
           this.unitedRats.push(rat)
        }

    }

    getRats() {
        return this.unitedRats
    }
    toString(){
        let res=this.name+"\n"
        for (let i = 0; i <this.unitedRats.length ; i++) {
          res+="##"+this.unitedRats[i].name+"\n"
        }
        return res
    }
}

let test = new Rat("Pesho");
// console.log(test.toString());

// console.log(test.getRats());

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());


console.log(test.toString());
