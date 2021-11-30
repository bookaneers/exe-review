// querying the DOM
// there is only one .tab-container
var $tabContainer = document.querySelector('.tab-container');
// there are multiples .tab and .view
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

// addEventListener with a click and a callback function
$tabContainer.addEventListener('click', function (event) {
  // verify if user is clicking on a .tab
  var $resultTab = event.target.matches('.tab');
  // if user clicked on .tab
  if ($resultTab) {
    // loop through the array .tab to change tab views
    for (var i = 0; i < $tab.length; i++) {
      // verify if textContent of item is the same that event.target.textContent
      if ($tab[i].textContent === event.target.textContent) {
        // if true change class name to 'tab active'
        $tab[i].className = 'tab active';
      } else {
        // if not, set className to 'tab
        $tab[i].className = 'tab';
      }
    }
    // getting the value of .data-view
    var $attributeDataView = event.target.getAttribute('data-view');
    // loop through $view's array
    for (var k = 0; k < $view.length; k++) {
      // if .data-view value sames as attributeDataView
      if ($view[k].getAttribute('data-view') === $attributeDataView) {
        // set className to view
        $view[k].className = 'view';
      } else {
        // if not, set className to view hidden
        $view[k].className = 'view hidden';
      }
    }
  }
});
