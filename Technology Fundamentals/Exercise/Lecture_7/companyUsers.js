function companyUsers(inputArea) {
    let list = {};

    for (let row of inputArea) {
        let [company, id] = row.split(' -> ');

        if (!list.hasOwnProperty(company)) {
            list[company] = [];
        }
        if (!list[company].includes(id)) {
            list[company].push(id);
        }
    }

    let sortedCompanies = Object.entries(list)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, idData] of sortedCompanies) {
        console.log(company);
        for (let id of idData) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)