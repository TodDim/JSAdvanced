class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = Number(innerLength)
    }

    increase(l) {
        this.innerLength += l
    }

    decrease(l) {
        this.innerLength -= l
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    toString() {
        let res=this.innerString
        if(res.length>this.innerLength){
            res=res.substring(0,this.innerLength)+"..."
        }
        else if(this.innerLength===0){
            res="..."
        }
    return res
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());
