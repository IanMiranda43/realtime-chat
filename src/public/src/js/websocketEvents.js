import { printMyMessages, printAnotherMessages } from './screenUpdate.js';

document.addEventListener('DOMContentLoaded', () => {
	// eslint-disable-next-line no-undef
	const socket = io();
    
	document.getElementById('formMessages').addEventListener('submit', (event) => {
		event.preventDefault();
		const messagesInput = document.getElementById('messagesInput');
		const message = messagesInput.value;
        
		if (message) {
			printMyMessages(message);
            
			socket.emit('sendMessage', message);
    
			messagesInput.value = '';
		}
	});
    
	socket.on('receiveMessage', (messageObj) => {
		const { sender, message } = messageObj;
    
		if (sender !== socket.id) {
			printAnotherMessages(message);
		}
	});
});