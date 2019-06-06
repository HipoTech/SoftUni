function tableFilter(array, commandLine) {
    let [command, header, value] = [...commandLine.split(' ')];
    let table = array.slice();
    let index = 0;
    switch (command) {
        case 'hide':
            index = table[0].indexOf(header);
            table.forEach(row => {
                row.splice(index, 1)
            });
            table.forEach(row => {
                console.log(row.join(' | '));
            });
            break;
        case 'sort':
            index = table[0].indexOf(header);
            let contentToSort = [];
            for (let i = 1; i < table.length; i++) {
                let row = table[i];
                contentToSort.push(row);
            }
            contentToSort.forEach(rowOfContentToSort => {
                if (!Number.isNaN(Number(rowOfContentToSort[index]))) {
                    contentToSort.sort((a, b) => {
                        return a[index] - b[index];
                    })
                } else {
                    contentToSort.sort((a, b) => {
                        return a[index].localeCompare(b[index]);
                    })
                }
            });

            console.log(table[0].join(' | '));
            contentToSort.forEach(rowOfContentToSort => {
                console.log(rowOfContentToSort.join(' | '));

            });
            break;
        case 'filter':
            index = table[0].indexOf(header);
            console.log(table[0].join(' | '));

            for (let j = 0; j < table.length; j++) {
                let row = table[j];
                if (row[index] === value) {
                    console.log(row.join(' | '));
                }
            }
            break;
        default:
            break;
    }
}
tableFilter(
    [['name', 'age', 'grade'],
    ['Peter', '25', '5.00'],
    ['George', '34', '6.00'],
    ['Marry', '28', '5.49']],
    'hide '
)