// query the DOM
var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function() {
  event.preventDefault();
  const object = {};

  object['name'] = $contactForm.elements.name.value;
  object['email'] = $contactForm.elements.email.value;
  object['message'] = $contactForm.elements.message.value;
  console.log(object);
})
