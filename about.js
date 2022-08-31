console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted successfully")
}

function compliment(evt) {
	evt.preventDefault();
	
	alert("You are awesome")
}
let form = document.querySelector('#contact');
let cat = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
cat.addEventListener('mouseover', compliment);