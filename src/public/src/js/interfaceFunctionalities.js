function getElement(e) {
	return document.querySelector(e);
}

function camelizeNames(str) {
	return str.split(' ').map(string => {
		return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
			return index === 0 ? word.toUpperCase() : word.toLowerCase();
		});
	}).toString().replace(/,/g, ' ');
}

function clearEmailInput() {
	return this.value = this.value.toLowerCase();
}

function clearNameInput() {
	this.value = camelizeNames(this.value);
}

document.addEventListener('DOMContentLoaded', () => {
	const emailInput = getElement('#emailInput');
	emailInput.addEventListener('keyup', clearEmailInput);
	emailInput.addEventListener('change', clearEmailInput);
	
	const nameInput = getElement('#nameInput');
	nameInput.addEventListener('keyup', clearNameInput);
	nameInput.addEventListener('change', clearNameInput);
	
	getElement('#action_menu_btn').addEventListener('click', () => {
		const action_menu = getElement('.action_menu');

		if (action_menu.style.display) {
			action_menu.style.display = '';
		} else {
			action_menu.style.display = 'block';
		}
	});
});