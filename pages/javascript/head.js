
fetch('../pages/templates/head.html').then(function (response){
    if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
    let body = document.querySelector('head');
    body.innerHTML = text;
	
});