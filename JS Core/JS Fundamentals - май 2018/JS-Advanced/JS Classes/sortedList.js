(function sortedList() {
    class List {
        constructor() {
            this.collection = [];
            this.size = 0;
        }
        add(element) {
            this.collection.push(Number(element));
            this.collection.sort((a, b) => a - b);
            this.size++;
            if (this.size < 0) {
                this.size = 0;
            }
            return this;
        }
        remove(index) {
            if (index <= this.size - 1 && index >= 0) {
                this.collection.splice(Number(index), 1);
                this.collection.sort((a, b) => a - b);
                this.size--;
                if (this.size < 0) {
                    this.size = 0;
                }
                return this;
            }
        }
        get(index) {
            if (index <= this.size - 1 && index >= 0) {
                return this.collection[index];
            }
        }
    }
})()