// This is my first javascript code
console.log('Hello World');

fetch('../header.html').then(function (response){
    if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
    let body = document.querySelector('.header');
    body.innerHTML = text;
	
});