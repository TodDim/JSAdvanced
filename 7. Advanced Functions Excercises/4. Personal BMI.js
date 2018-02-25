function bmi(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: Number(age),
            weight: Number(weight),
            height: Number(height)
        },
        BMI: Math.round(weight / (height * height / 10000)),
        status: (function () {
            return findStatus(Math.round(weight / (height * height / 10000)))
        })()
    }

    function findStatus(bmi) {
        if (bmi < 18.5)
            return 'underweight'
        else if (bmi < 25)
            return 'normal'
        else if (bmi < 30)
            return 'overweight'
        else
            return'obese'
    }

    if (person.status === 'obese')
        person.recommendation = 'admission required'

    return person
}

// console.log(bmi('Peter', 29, 75, 182));
console.log(bmi('Honey Boo Boo', 9, 57, 137));