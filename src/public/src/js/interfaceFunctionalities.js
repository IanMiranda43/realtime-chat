document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('action_menu_btn').addEventListener('click', () => {
		const action_menu = document.querySelector('.action_menu');

		if (action_menu.style) {
			action_menu.style.display = '';
		} else {
			action_menu.style.display = 'block';
		}
	});
});