function print_and_Sum(a, b) {
    let start;
    let end;
    let sum = 0;
    let numbers = '';
    if (a > b) {
        start = b
        end = a
    } else {
        start = a
        end = b
    }
    for (let i = start; i <= end; i++) {

        numbers += ` ${i}`
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
print_and_Sum(5, 10)