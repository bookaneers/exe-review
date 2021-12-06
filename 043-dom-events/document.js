// more Events

// addEventListener to DOCUMENT to confirm DOM has been loaded
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('document loaded');
});

// addEventListener to DOCUMENT to confirm key has been pressed
document.addEventListener('keydown', function (event) {
  console.log('KEY PRESSED');
  console.log('  event.key:', event.key);
});

// addEventListener to DOCUMENT to confirm mouseover move over DOCUMENT
document.addEventListener('mousemove', function (event) {
  console.log('mouse moved');
  console.log('  pageX:', event.pageX, 'pageY:', event.pageY);
});
