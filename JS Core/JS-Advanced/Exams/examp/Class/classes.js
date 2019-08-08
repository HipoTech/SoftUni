class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER,
        };
    }

    subscribe(name, type) {
        let sub = '';
        const correctType = type === 'normal' || type === 'special' || type === 'vip';
        if (!correctType) {
            throw new Error(`The type ${type} is invalid`);
        } else {
            let flag = false;
            
            this.subscribers.forEach(subscriber => {
                if (subscriber['name'] === name) {
                    flag = true;
                }
            });
            if (!flag) {
                const subscriber = {
                    name: name,
                    type: type,
                    books: [],
                }
                this.subscribers.push(subscriber);
                sub = subscriber;
            } else {
                this.subscribers.forEach(subscriber => {
                    if (subscriber['name'] === name) {
                        subscriber['type'] = type;
                        sub = subscriber;
                    }
                });
            }

        }
        return sub;
    }

    unsubscribe(name) {
        let flag = false;
        this.subscribers.forEach((subscriber, index) => {
            if (subscriber['name'] === name) {
                flag = true;
                this.subscribers.splice(index, 1);
            }
        });
        if (!flag) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let flag = false;
        let sub = '';
        this.subscribers.forEach((subscriber, index) => {
            if (subscriber['name'] === subscriberName) {
                flag = true;
                if (subscriber.books.length >= this.subscriptionTypes[subscriber.type]) {
                    throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`);
                } else {
                    const book = {
                        title: bookTitle,
                        author: bookAuthor,
                    }
                    subscriber.books.push(book);
                    sub = subscriber;
                }
            }
        });
        if (!flag) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }
        return sub;
    }

    showInfo() {
        let string = '';
        if (this.subscribers.length === 0) {
            return `"${this.libraryName} has no information about any subscribers"`
        } else {
            this.subscribers.forEach(subscriber => {
                string += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}
Received books: `;

                subscriber.books.forEach(book => {
                    string += `${book.title} by ${book.author}, `
                });
                if (subscriber.books.length !== 0) {
                    string = string.slice(0, string.length - 2);
                }
                string += '\n'
            });
        }
        return string;
    }

}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Joahn', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.unsubscribe('John'));


// let lib = new Library('L');

// lib.subscribe('Peter', 'normal');
// lib.subscribe('John', 'special');
// lib.subscribe('Josh', 'vip')

// lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
// lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
// lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
// lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
// lib.receiveBook('Josh', 'Cromwell', 'Victor Hugo');
// lib.receiveBook('Josh', 'Marie Tudor', 'Victor Hugo');
// lib.receiveBook('Josh', 'Bug-Jargal', 'Victor Hugo');
// lib.receiveBook('Josh', 'Les Orientales', 'Victor Hugo');
// lib.receiveBook('Josh', 'Marion de Lorme', 'Victor Hugo');




// console.log(lib.showInfo());

