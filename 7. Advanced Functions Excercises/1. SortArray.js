function sortArray(arr, sortMethod) {
    let ascending=function (a,b) {
        return a-b
    }

     let descending=function (a,b) {
        return b-a
    }

    let sortingStrategy={
        'asc': ascending,
        'desc': descending
    }

    return arr.sort(sortingStrategy[sortMethod])
}

console.log(sortArray([1, 2, 3, 10], 'asc'));