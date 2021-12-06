// modal

// query class element
var modal = document.getElementById('myModal');

// query element <button> that opens the modal
var btn = document.getElementById('myBtn');

// query <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// when user clicks the button, open the modal
// onclick function for element btn
btn.onclick = function () {

  // change display to 'block'
  modal.style.display = 'block';
};

// when the user clicks on <span> (x), close the modal
// onclick function for element spam
span.onclick = function () {

  // change display to 'none'
  modal.style.display = 'none';
};
