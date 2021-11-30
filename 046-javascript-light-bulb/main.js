var $container = document.querySelector('.container');
var $lightBulb = document.querySelector('.light-bulb');

$lightBulb.addEventListener('click', function(event) {
  if ($lightBulb.className === 'light-bulb') {
    $container.className = 'container-off';
    $lightBulb.className = 'light-bulb-off';
  }
  else {
    $container.className = 'container';
    $lightBulb.className = 'light-bulb';
  }
});
