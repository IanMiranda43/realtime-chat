import loadHTMLTemplate from '../templates/loadHTMLTemplates.js';

const messageCardBody = document.getElementById('messageCardBody');

async function getTemplateMessageBody(template, message) {
	const senderMsgTemplate = await loadHTMLTemplate(`./${template}.html`);
	const now = new Date();
	const messageTime = `${now.getHours()}:${now.getMinutes()}`;

	return senderMsgTemplate.replace('{message}', message).replace('{messageTime}', messageTime);
}

export async function printMyMessages(message) {
	const messageBody = await getTemplateMessageBody('sendedMsg', message);

	messageCardBody.insertAdjacentHTML('beforeend', messageBody);
	messageCardBody.scrollTo(0, messageCardBody.scrollHeight);
}

export async function printAnotherMessages(message) {
	const messageBody = await getTemplateMessageBody('receivedMsg', message);

	messageCardBody.insertAdjacentHTML('beforeend', messageBody);
	messageCardBody.scrollTo(0, messageCardBody.scrollHeight);
}
