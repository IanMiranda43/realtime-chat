/* eslint-disable no-undef */
$(document).ready(() => {
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});

const socket = io();

$('#submitBtn').click(() => {
	const message = $('#messagesInput').val();

	printMyMessages(message);

	socket.emit('newMessage', message);
});

socket.on('newMessage', (messageObj) => {
	const { sender, message } = messageObj;

	if (sender !== socket.id) {
		printAnotherMessages(message);
	}
});

function printMyMessages(message) {
	const messageBody = `<div class="d-flex justify-content-end mb-4">
        <div class="msg_container_send">
            ${message}
            <span class="msg_time_send">8:55 AM, Today</span>
        </div>
        <div class="img_cont_msg">
            <img class="rounded-circle user_img_msg">
        </div>
    </div>`;

	$('#messageCardBody').append(messageBody);
	$('#messagesInput').val('');
}

function printAnotherMessages(message) {
	const messageBody = `<div class="d-flex justify-content-start mb-4">
        <div class="img_cont_msg">
            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg">
        </div>
        <div class="msg_container">
            ${message}
            <span class="msg_time">8:40 AM, Today</span>
        </div>
    </div>`;

	$('#messageCardBody').append(messageBody);
}