import { printMyMessages, printAnotherMessages } from './screenUpdate.js';

function getElement(e) {
	return document.querySelector(e);
}

function createElementsObj(elements) {
	const inputsValues = {};

	for (let key in elements) {
		const input = elements[key];

		if (!isNaN(key) && input.nodeName === 'INPUT') {
			inputsValues[input.getAttribute('name')] = input.value;
		}
	}

	for (let keys in inputsValues) {
		if (!inputsValues[keys]) {
			delete inputsValues[keys];
		}
	}
    
	return inputsValues;
}

function toggleLoginInterface() {
	function toggleDisplay(element) {
		if (element.style.display != 'none') {
			element.style.display = 'none';
		} else {
			element.style.display = 'block';
		}
	}

	toggleDisplay(getElement('#loginCard'));
	toggleDisplay(getElement('#contactsCard'));
	toggleDisplay(getElement('#messagesCard'));
}

document.addEventListener('DOMContentLoaded', () => {
	// eslint-disable-next-line no-undef
	const socket = io();

	getElement('#loginForm').addEventListener('submit', function(event) {
		event.preventDefault();
        
		socket.emit('register', createElementsObj(this.elements));
	});
    
	getElement('#formMessages').addEventListener('submit', (event) => {
		event.preventDefault();
		const messagesInput = getElement('#messagesInput');
		const message = messagesInput.value;
        
		if (message) {
			printMyMessages(message);
            
			socket.emit('sendMessage', message);
    
			messagesInput.value = '';
		}
	});

	socket.on('userLoginResponse', (loginReturn) => {
		const { status } = loginReturn;
        
		if (loginReturn.userSocketId === socket.id) {
			if (status != 200) {
				return alert(loginReturn.error); 
			}
            
			socket.user = loginReturn.user;
            
			toggleLoginInterface();
		}
	});
    
	socket.on('receiveMessage', (messageObj) => {
		const { sender, message } = messageObj;
    
		if (sender !== socket.id) {
			printAnotherMessages(message);
		}
	});
});