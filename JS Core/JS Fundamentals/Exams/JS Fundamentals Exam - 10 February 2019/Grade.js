function grade(exam , homeworkCompleted, totalHomework) {
    const maxPoints = 100;
    const examPointsMax = 400;
    let homeWork = (homeworkCompleted / totalHomework)*10;
    let totalPoints = (0.9 * (exam / examPointsMax))*100 + homeWork;
    let grade = 3 + 2*(totalPoints - maxPoints / 5) / (maxPoints / 2);
    
    if (exam === examPointsMax) {
        console.log('6.00');
    }else{
        if (grade >= 6) {
            console.log('6.00');
        }else if (grade < 3) {
            console.log('2.00');
        }else {
            console.log(grade.toFixed(2));
        }
    }
}
grade(390, 5, 5)