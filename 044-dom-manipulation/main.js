var clicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function() {
  clicks++;
  console.log(clicks);
  $clickCount.textContent = `Clicks: ${clicks}`
  if (clicks < 4) $hotButton.className = 'hot-button cold';
  if (clicks >= 4 && clicks < 7) $hotButton.className = 'hot-button coll';
  if (clicks >= 7 && clicks < 10) $hotButton.className = 'hot-button tepid';
  if (clicks >= 10 && clicks < 13) $hotButton.className = 'hot-button warm';
  if (clicks >= 13 && clicks < 16) $hotButton.className = 'hot-button hot';
  if (clicks >= 16) $hotButton.className = 'hot-button nuclear';
});
