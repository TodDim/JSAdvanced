function assemble(obj) {
    let engines = {
        Small: {power: 90, volume: 1800},
        Normal: {power: 120, volume: 2400},
        Monster: {power: 200, volume: 3500}
    }
    let coupes = {
        Hatchback: {type: 'hatchback', color: null},
        Coupe: {type: 'coupe', color: null}
    }
    let car = {
        model: obj.model,
        engine: findEngine(obj.power),
        carriage: findCarriage(obj.carriage,obj.color),
        wheels: findWheel(Number(obj.wheelsize)),

    }

    function findEngine(power) {
        let engine = Array.from(Object.keys(engines)).filter(k => engines[k].power >= power)[0]
        return engines[engine]
    }

    function findCarriage(carriage,color){
        return{
            type:carriage,
            color:color
        }
    }

    function findWheel(wheel){
        if(wheel%2===0){
            wheel--
        }
        return [wheel,wheel,wheel,wheel]
    }

    return car
}

console.log(assemble({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));