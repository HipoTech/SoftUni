// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    const sendBtn = document.querySelector('#inputSection button');

    const takeMessage = function () {

        const moveToArchive = function (ctx) {
            ctx.target.parentNode.parentNode.remove();
        }

        const open = function (ctx) {
            const message = ctx.target.parentNode.parentNode.querySelector('p');
            const username = ctx.target.parentNode.parentNode.querySelector('span');
            const openQuestions = document.querySelector('#openQuestions');

            const openTemplate = `<div class="openQuestion">
                <img src="./images/user.png" width="32" height="32" />
                <span>${username.textContent}</span>
                <p>${message.textContent}</p>
                <div class="actions">
                    <button class="reply">Reply</button>
                </div>
                <div class="replySection" style="display: none">
                    <input class="replyInput" type="text" placeholder="Reply to this question here...">
                    <button class="replyButton">Send</button>
                    <ol class="reply" type="1">
                        
                    </ol>
                </div>
            </div>`;
            ctx.target.parentNode.parentNode.remove();

            openQuestions.innerHTML += openTemplate;

            const reply = function (ctx) {
                const replaySection = ctx.target.parentNode.parentNode.querySelector('.replySection');
                const replyButton = ctx.target.parentNode.parentNode.querySelector('.replySection .replyButton');

                const sendReplayMessage = function () {
                    const replyContainer = ctx.target.parentNode.parentNode.querySelector('.replySection .reply');
                    const replyMessage = ctx.target.parentNode.parentNode.querySelector('.replySection .replyInput');
                    if (replyMessage !== '') {
                        replyContainer.innerHTML += `<li>${replyMessage.value}</li>`
                        replyMessage.value = ''
                    }

                }


                replyButton.addEventListener('click', sendReplayMessage)

                if (ctx.target.textContent === 'Reply') {
                    ctx.target.textContent = 'Back'
                    replaySection.style.display = 'block;';

                } else if (ctx.target.textContent === 'Back') {
                    ctx.target.textContent = 'Reply'
                    replaySection.style.display = 'none;';
                }

            }

            const addListeners = function () {
                const replyBtn = [...document.querySelectorAll('.reply')];
                replyBtn.forEach(btn => {
                    btn.addEventListener('click', reply)
                });
            }();


        }

        const messagePending = function () {
            const message = document.querySelector('#inputSection textarea');
            let userName = document.querySelector('#inputSection div input');
            const pendingQuestions = document.querySelector('#pendingQuestions');

            if (message.value !== '') {
                if (userName.value === '') {
                    userName.value = 'Anonymous';
                }

                const messageTemplate = `<div class="pendingQuestion">
                <img src="./images/user.png" width="32" height="32" />
                <span>${userName.value}</span>
                <p>${message.value}</p>
                <div class="actions">
                    <button class="archive">Archive</button>
                    <button class="open">Open</button>
                </div>
                </div>`
                pendingQuestions.innerHTML += messageTemplate;

                message.value = '';
                userName.value = '';

            }

        }();

        const addListeners = function () {
            const archiveBtn = [...document.querySelectorAll('.archive')];
            archiveBtn.forEach(btn => {
                btn.addEventListener('click', moveToArchive)
            });

            const openBtn = [...document.querySelectorAll('.open')];
            openBtn.forEach(btn => {
                btn.addEventListener('click', open)
            });
        }();


    }

    sendBtn.addEventListener('click', takeMessage);
}
// To check out your solution, just submit mySolution() function in judge system.