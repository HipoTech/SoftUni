function odd(inputString) {
    let array = inputString.split(" ").map(x => x.toLowerCase());
    let inputMap = new Map();
    let ans = [];
    for (const word of array) {
        if (inputMap.has(word)) {
            inputMap.set(word, inputMap.get(word) + 1);
        } else {
            inputMap.set(word, 1);
        }
    }
    for (const [key, value] of inputMap) {
        if (value % 2 !== 0) {
            ans.push(key);
        }
    }

    console.log(ans.join(" "));

}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')