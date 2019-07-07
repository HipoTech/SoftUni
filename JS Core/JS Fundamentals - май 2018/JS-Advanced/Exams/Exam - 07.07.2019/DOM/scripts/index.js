// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    const mainInput = document.querySelector('#inputSection textarea');
    const userNameInput = document.querySelector('#inputSection div input');
    const mainSendBtn = document.querySelector('#inputSection div button');
    const pendingQuestionsId = document.querySelector('#pendingQuestions');
    const openQuestionsId = document.querySelector('#openQuestions');

    mainSendBtn.addEventListener('click', sendMessage);

    function sendMessage() {
        let userName = userNameInput.value
        const question = mainInput.value;

        if (userNameInput.value === '') {
            userName = 'Anonymous';
        }

        const divPendingQuestion = document.createElement('div');
        divPendingQuestion.classList = 'pendingQuestion';

        const img = document.createElement('img');
        img.src = './images/user.png';
        img.width = '32'
        img.height = '32'

        const userNameFild = document.createElement('span');
        userNameFild.textContent = userName;

        const questionFild = document.createElement('p');
        questionFild.textContent = question;

        const divBtnHolder = document.createElement('div');
        divBtnHolder.classList = 'actions';

        const btnArchive = document.createElement('button');
        btnArchive.classList = 'archive';
        btnArchive.textContent = 'Archive';
        const btnOpen = document.createElement('button');
        btnOpen.classList = 'open';
        btnOpen.textContent = 'Open';
        divBtnHolder.appendChild(btnArchive);
        divBtnHolder.appendChild(btnOpen);


        divPendingQuestion.appendChild(img);
        divPendingQuestion.appendChild(userNameFild);
        divPendingQuestion.appendChild(questionFild);
        divPendingQuestion.appendChild(divBtnHolder);

        pendingQuestionsId.appendChild(divPendingQuestion);

        mainInput.value = '';
        userNameInput.value = '';

        btnArchive.addEventListener('click', deleteElement)

        function deleteElement() {
            this.parentElement.parentElement.remove();
        }

        btnOpen.addEventListener('click', openQuestion);

        function openQuestion() {
            const content = divPendingQuestion;
            divPendingQuestion.remove();

            content.className = 'openQuestion';
            content.querySelector('.actions .archive').remove();
            content.querySelector('.actions .open').remove();
            let newReplyBtn = document.createElement('button');
            newReplyBtn.className = 'reply';
            newReplyBtn.textContent = 'Reply';
            newReplyBtn.addEventListener('click', reply);
            content.querySelector('.actions').appendChild(newReplyBtn);
            openQuestionsId.appendChild(content);

            function reply() {
                const divReply = document.createElement('div');
                divReply.className = 'replySection';
                divReply.style.display = 'block';


                const backBtn = document.createElement('button');
                backBtn.className = 'reply';
                backBtn.textContent = 'Back';
                newReplyBtn.remove();
                content.querySelector('.actions').appendChild(backBtn);
                backBtn.addEventListener('click', hideElement);

                const inputReply = document.createElement('input');
                inputReply.className = 'replyInput';
                inputReply.type = 'text';
                inputReply.placeholder = 'Reply to this question here...';
                divReply.appendChild(inputReply);
                const replySendBtn = document.createElement('button');
                replySendBtn.className = 'replyButton';
                replySendBtn.textContent = 'Send';
                divReply.appendChild(replySendBtn);
                replySendBtn.addEventListener('click', sendReply);
                const createReplyFild = document.createElement('ol');
                createReplyFild.className = 'reply';
                createReplyFild.type = '1';
                divReply.appendChild(createReplyFild);
                content.appendChild(divReply);

                function hideElement() {
                    divReply.style.display = 'none';
                    content.querySelector('.actions').appendChild(newReplyBtn);
                    backBtn.remove();
                }


                function sendReply() {
                    const liElement = document.createElement('li');
                    liElement.textContent = inputReply.value;
                    createReplyFild.appendChild(liElement);
                    inputReply.value = '';
                }
                function reply() {

                    
            }
        }
        
    }

}
// To check out your solution, just submit mySolution() function in judge system.