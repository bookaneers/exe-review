// DOM manipulation

// initiate variable to count clicks
var clicks = 0;

// query two class elements
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

// addEventListener 'click' to one element with a callback function
$hotButton.addEventListener('click', function () {

  // increment number of clicks everything user click on .hot-button
  clicks++;

  // change textContent in .click-count showing the increment
  $clickCount.textContent = `Clicks: ${clicks}`

  // condition to determine how the .hot-button will change colors
  if (clicks < 4) $hotButton.className = 'hot-button cold';
  if (clicks >= 4 && clicks < 7) $hotButton.className = 'hot-button cool';
  if (clicks >= 7 && clicks < 10) $hotButton.className = 'hot-button tepid';
  if (clicks >= 10 && clicks < 13) $hotButton.className = 'hot-button warm';
  if (clicks >= 13 && clicks < 16) $hotButton.className = 'hot-button hot';
  if (clicks >= 16) $hotButton.className = 'hot-button nuclear';

});
