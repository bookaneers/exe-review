// form values

// query an ID element
var $contactForm = document.querySelector('#contact-form');

// addEventListener 'submit' to contact-form with a callback function
$contactForm.addEventListener('submit', function () {

  // to prevent the browser from automatically reloading
  // the page with the form's values in the URL
  event.preventDefault();

  // create new object
  const object = {};

  // add keys and value to object
  object['name'] = $contactForm.elements.name.value;
  object['email'] = $contactForm.elements.email.value;
  object['message'] = $contactForm.elements.message.value;

  console.log(object);
})
