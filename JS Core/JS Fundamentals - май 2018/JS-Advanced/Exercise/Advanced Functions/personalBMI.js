function personalBMI(name, age, weight, height) {
    let person = {};
    age = Math.round(age);
    weight = Math.round(weight);
    height = Math.round(height);
    let status = '';
    person['name'] = name;
    person['personalInfo'] = {
        'age': Math.round(age),
        'weight': Math.round(weight),
        'height': Math.round(height),
    };
    person['BMI'] = Math.round(weight / (((height / 100) * (height / 100))));
    if (person['BMI'] < 18.5) {
        status = 'underweight';
    } else if (person['BMI'] < 25) {
        status = 'normal';
    } else if (person['BMI'] < 30) {
        status = 'overweight';
    } else if (person['BMI'] >= 30) {
        status = 'obese';
        person['recommendation'] = 'admission required';
    }
    person['status'] = status;

    return person;

}

personalBMI('Honey Boo Boo', 9, 57, 137)