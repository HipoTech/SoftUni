function solve() {
   let btn = document.querySelectorAll('#send')[0];
   let messageBox = document.querySelector('#chat_messages');
   btn.addEventListener('click', sendMessage);

   function sendMessage() {
      let myMessage = document.getElementById('chat_input').value;
      let div = document.createElement('div');
      div.className = 'message my-message';
      div.textContent = `${myMessage}`;
      messageBox.appendChild(div);
      document.querySelectorAll('#chat_input')[0].value = '';
   }
}