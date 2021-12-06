// typing tutor

// querying class element
var $black = document.querySelectorAll('.black');

// increment i = move to next letter
var i = 0;

// function to check if user typed the right letter
function checkLetter(e) {

  // remove borderBottom from letter
  $black[i].style.borderBottom = 'none';

  // if user click the right letter
  if (e.key === $black[i].textContent) {

    // switch letter's color to green
    $black[i].className = 'green';

    // move to next letter
    i++;

    // add borderBottom to solid black
    $black[i].style.borderBottom = '4px solid black';

    // if not
  } else {

    // switch letter className to red
    $black[i].className = 'red';
    // switch letter borderBottom to red
    $black[i].style.borderBottom = '4px solid red';
  }
}

// addEvenListener 'keydown' to DOCUMENT and callback function checkLetter
document.addEventListener('keydown', checkLetter);
