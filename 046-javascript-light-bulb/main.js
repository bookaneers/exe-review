// light bulb

// query two class elements
var $container = document.querySelector('.container');
var $lightBulb = document.querySelector('.light-bulb');

// addEventListener 'click' to class element light-bulb and a callback function
$lightBulb.addEventListener('click', function (event) {

  // if the current className is light-bulb
  if ($lightBulb.className === 'light-bulb') {

    // switch classNames on both elements to OFF
    $container.className = 'container-off';
    $lightBulb.className = 'light-bulb-off';
  }

  // if not
  else {

    // switch classNames on both elements to ON
    $container.className = 'container';
    $lightBulb.className = 'light-bulb';

  }
});
