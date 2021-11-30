//identify task-list element as the one to be clicked
var $taskList = document.querySelector('.task-list');
// AddEventListener('tipe of action, callback function)
$taskList.addEventListener('click', function () {
  // show event.target
  console.log('event.target: ', event.target);
  // show event.target.tagname
  console.log('event.target.tagName: ', event.target.tagName);
  // removing button
  if (event.target.tagName === 'BUTTON') {
    // identify previous element
    var ancestor = event.target.closest('.task-list-item');
    // show previous element
    console.log(ancestor);
    // remove previouis element
    ancestor.remove();
  }
});
