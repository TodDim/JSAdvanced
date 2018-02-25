function args() {
    let summary = {}
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i]
        let type = typeof obj
        console.log(type + ": " + obj);
        if (!summary[type]) {
            summary[type] = 1
        }
        else {
            summary[type]++
        }
    }

    let sortedTypes=new Map()
    for (let currType in summary) {
        sortedTypes.set(currType,summary[currType])
    }

    let f=[...sortedTypes]
    f.sort((a,b)=>b[1]-a[1]).forEach(pair=>console.log(pair[0]+" = " +pair[1]))
}
args('cat', 42, function () { console.log('Hello world!'); });