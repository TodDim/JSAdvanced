function modify(obj) {
    let worker = obj
    if (obj.handsShaking === true) {
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience
        obj.handsShaking = false
    }
    return worker
}

// console.log(modify({
//     weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true
// }));

console.log(modify({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));
