console.log('hello from dynamic name javascript file');

console.log(window.location.search);
const params = new URLSearchParams(window.location.search);

console.log(params.get('name'));

const nameElem = document.getElementById('name');
nameElem.textContent = params.get('name');