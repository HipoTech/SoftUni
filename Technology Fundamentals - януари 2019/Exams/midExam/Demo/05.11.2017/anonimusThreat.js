function threat(params) {

    Array.prototype.merge = function (start, end) {
        let newArray = this.splice(start, end + 1);
        this.splice(start, 0, newArray.join(""))
    }

    Array.prototype.divide = function (index, partitions) {
        let newString = this[index];
        let len = Math.floor(newString.length / partitions);
        let newArray = [];
        let total = [];
        newArray.push(newString.split(""));
        for (let i = 0; i < newArray[0].length; i++) {
            total.push(newArray[0].splice(0, len).join(""));
        }
        total[total.length - 1] += newArray[0].splice(0).join("");
        this.splice(index, 1);
        for (let j = total.length - 1; j >= 0; j--) {
            this.unshift(total[j]);

        }
    }

    let base = params.shift().split(" ")
    let command = [];
    let i = 0;
    while (params[i] !== "3:1") {
        command.push(params[i].split(" "));
        switch (command[0][0]) {
            case "merge":
                base.merge(Number(command[0][1]), Number(command[0][2]))
                break;
            case "divide":
                base.divide(Number(command[0][1]), Number(command[0][2]))
                break;
            default:
                break;
        }

        i++;
    }

    console.log(base.join(" "));

}
threat(["asd dsa fsd 1237 dsfkasd 123 5444",
    "merge 0 2",
    "merge 1 3",
    "3:1"])