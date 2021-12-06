// form Events

// function to handleFocus
function handleFocus(event) {
  console.log(`'focus' event was fired`);
  console.log(`event.target.name: ${event.target.name}`);
}

// function to handleBlur
function handleBlur(event) {
  console.log(`'blur' event was fired`);
  console.log(`event.target.name: ${event.target.name}`);
}

// function to handleInput
function handleInput(event) {
  console.log(`event.target.name: ${event.target.name}`);
  console.log(`event.target.value: ${event.target.value}`);
}

// query three ID elements
var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

// addEventListener to all elements
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
