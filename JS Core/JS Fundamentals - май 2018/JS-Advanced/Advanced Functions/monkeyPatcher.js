let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(command) {
    function rate(up, down, balance) {
        let rating = '';
        let votes = (up / (down + up)) * 100;

        if (votes > 66) {
            rating = 'hot';
        } else if (up === down && balance >= 0 && up >= 100 && down >= 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else if (this.upvotes + this.downvotes < 10) {
            rating = 'new';
        }
        return rating
    }
    let actions = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes--;
        },
        score: () => {
            let balance = this.upvotes - this.downvotes
            let rating = rate(this.upvotes, this.downvotes, balance);
            let scoreTotal = [(this.upvotes), (this.downvotes), balance, rating];
            return scoreTotal;
        },
        downvote: () => {
            this.downvotes--;
        },
    }
    return actions[command]();
}
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote'); // (executed 50 times)

}

score = solution.call(post, 'score');

