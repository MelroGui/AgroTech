const form = document.querySelector('.login-form');
const usernameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;

	if (username === '' || password === '') {
		alert('Please fill in all fields');
	} else {

        
		alert(`Welcome, ${username}!`);
		form.reset();
	}
});
