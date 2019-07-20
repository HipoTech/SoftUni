(function () {
    const studentsMainConteiner = document.querySelector('#results tbody');
    const addStudentBtn = document.querySelector('#addStudentBtn');

    const httpRequester = {
        url: 'https://baas.kinvey.com/appdata/kid_r1U8HJTWS/students',
        get: function () {
            return fetch(this.url, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                }
            });
        },
        delete: function (elementId) {
            return fetch(this.url + `/${elementId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
            })
        },
        put: function (elementId, object) {
            return fetch(this.url + `/${elementId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(object),
            })
        },
        post: function (object) {
            return fetch(this.url, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic aGlwbzoxMjM0`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(object),
            });
        },

    }

    const checkServerResponse = (serverResponse) => {
        if (serverResponse.status > 300) {
            window.alert(`Server Error: ${serverResponse.status}`)
            throw new Error(`Server Error: ${serverResponse.status}`)
        }
        return serverResponse.json();
    }

    const getAllStudents = function () {
        httpRequester.get()
            .then(serverResponse => checkServerResponse(serverResponse))
            .then(studentsList => listAllStudents(studentsList))
            .catch(error => console.log(`Error Detected: ${error}`));
    }

    const listAllStudents = function (studentsList) {
        clearContent(studentsMainConteiner);

        studentsList
            .sort((a, b) => a.id - b.id)
            .forEach(student => {
                const newRecord = createTr();

                const id = createTd();
                id.textContent = student.id;

                const firstName = createTd();
                firstName.textContent = student.firstName;

                const lastName = createTd();
                lastName.textContent = student.lastName;

                const facultyNumber = createTd();
                facultyNumber.textContent = student.facultyNumber;

                const grade = createTd();
                grade.textContent = student.grade;

                newRecord.appendChild(id);
                newRecord.appendChild(firstName);
                newRecord.appendChild(lastName);
                newRecord.appendChild(facultyNumber);
                newRecord.appendChild(grade);

                studentsMainConteiner.appendChild(newRecord);
            });

    }

    const addNewStudent = function () {
        const studentData = {
            id: document.querySelector('.idInput').value,
            firstName: document.querySelector('.firstNameInput').value,
            lastName: document.querySelector('.lastNameInput').value,
            facultyNumber: document.querySelector('.facultyNumberInput').value,
            grade: document.querySelector('.gradeInput').value,
        }

        let noEmptyField = true;

        for (const data in studentData) {
            console.log(studentData[data]);

            if (studentData[data] === '') {
                noEmptyField = false
            }
        }

        if (noEmptyField) {
            httpRequester.post(studentData)
                .then(serverResponse => checkServerResponse(serverResponse))
                .then(() => getAllStudents())
                .then(() => {
                    document.querySelector('.idInput').value = '';
                    document.querySelector('.firstNameInput').value = '';
                    document.querySelector('.lastNameInput').value = '';
                    document.querySelector('.facultyNumberInput').value = '';
                    document.querySelector('.gradeInput').value = '';
                })
                .catch(error => console.log(`Error Detected: ${error}`));
        } else {
            window.alert('You need to fill all the data of the student!')
        }
    }

    const clearContent = (elementToClear) => elementToClear.innerHTML = '';

    const createTd = () => document.createElement('td');
    const createTr = () => document.createElement('tr');

    addStudentBtn.addEventListener('click', addNewStudent)

    getAllStudents();
})()