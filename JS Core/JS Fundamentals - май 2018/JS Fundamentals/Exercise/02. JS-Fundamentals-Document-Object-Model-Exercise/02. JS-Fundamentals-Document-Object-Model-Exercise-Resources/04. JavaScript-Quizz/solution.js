function solve() {
  let sections = document.querySelectorAll('section');

  let correctCounter = 0;
  let auizNumber = 0;

  let ans = document.querySelectorAll('.quiz-answer p');
  for (let i = 0; i < ans.length; i++) {
    ans[i].addEventListener('click', quizAns);
  }


  function quizAns() {
    console.log(this.textContent);
    if (this.textContent === 'onclick' ||
      this.textContent === 'JSON.stringify()' ||
      this.textContent === 'A programming API for HTML and XML documents') {
      correctCounter++;
    }

    sections[auizNumber].style = 'display:none'

    if (auizNumber <= 1) {
      sections[auizNumber + 1].style = 'display:block'
    }
    auizNumber++;
    console.log(auizNumber);

    if (auizNumber === 3) {
      let result = document.querySelector('#results');
      let resultText = document.querySelector('#results .results-inner h1');
      result.style = 'display:block';
      if (correctCounter === 3) {
        resultText.textContent = 'You are recognized as top JavaScript fan!';
      } else {
        resultText.textContent = `You have ${correctCounter} right answers`;
      }
    }
  }
}