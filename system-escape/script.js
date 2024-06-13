document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        // Simulate AI response
        setTimeout(() => {
            displayMessage('This is a simulated response from The Oracle.', 'ai');
        }, 1000);
    }
});

function displayMessage(message, sender) {
    const chatboxMessages = document.getElementById('chatbox-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatboxMessages.appendChild(messageElement);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

// Additional styling for messages
const style = document.createElement('style');
style.innerHTML = `
    .message {
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .user {
        background: #d1e7dd;
        align-self: flex-end;
        text-align: right;
    }
    .ai {
        background: #ffeeba;
        align-self: flex-start;
    }
`;
document.head.appendChild(style);
