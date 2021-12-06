// DOM Events

// function to handle a Click Event
function handleClick(event) {
  console.log('button clicked');
  console.log(`Event: ${event}`);
  console.log(`Event Target: ${event.target}`);
}

// querying a class element
var $clickButton = document.querySelector('.click-button');
// adding an event 'click' and a callback function
$clickButton.addEventListener('click', handleClick);

// function to hanlde a Mouseover Event
function handleMouseover(event) {
  console.log('button hovered');
  console.log(`Event: ${event}`);
  console.log(`Event Target: ${event.target}`);
}

// querying a class element
var $hoverButton = document.querySelector('.hover-button');
// adding an event 'mouseover' and a callback funtion
$hoverButton.addEventListener('mouseover', handleMouseover);

// function to handle  a Double-click Event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(`Event: ${event}`);
  console.log(`Event Target: ${event.target}`);
}

// querying a class element
var $doubleClickButton = document.querySelector('.double-click-button');
// adding an event 'dblclick' and a callback function
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
