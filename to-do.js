//Docs
//Task list:
//  can have a max of up to 7 items on the tasks list
//  tasks must be put into local storage

var defaults = {
  // CSS selectors and attributes that would be used by the JavaScript functions
  todoTask: "todo-task",
  taskId: "task-",
  formId: "todo-form",
  dataAttribute: "data",
  deleteDiv: "delete-div"
}, codes = {
  "1" : "#pending", // For pending tasks
  "2" : "#completed"
};

var tasks = []

// Load everything from local storage into list
window.onload = function WindowLoad(event) {
  for(let i = 1; i <= 7; i++){
    if(localStorage.getItem("task"+i) === "null"){
      localStorage.setItem("task"+i, "")
    }
  }

  for(let i = 1; i <= 7; i++)
  {
    if(localStorage.getItem("task"+i) != "" && localStorage.getItem("task"+i) !== "null"){
      loadElement(localStorage.getItem("task"+i))
    }
  }
}

// Create a "close" button and append it to each list item
var ul = document.getElementById("myUL")
var myNodelist = ul.getElementsByTagName("LI");
var i;
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (let i = 0; i < close.length; i++) {
  console.log("close button clicked")
  close[i].onclick = function() {
    var div = this.parentElement;
    div.removeChild(this);
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.tasks');
if(list){
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  console.log(inputValue)
  if (inputValue === '') {
    return;
  } else {
    if (setLocalStorage(inputValue))
    {
      document.getElementById("myUL").appendChild(li);
    }
    else {
      return;
    }
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      delLocalStorage(parentElement.inputValue)
    }
  }
}

function loadElement(inputValue) {
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    return;
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      let str = 
      delLocalStorage(this.parentElement.textContent.slice(0, -1))
    }
  }
}

function setLocalStorage(value) {
  const size = 7
  for (let i = 1; i <= size; i++){
    console.log(localStorage.getItem)
    if (localStorage.getItem("task"+i) === 'undefined' || localStorage.getItem("task"+i) === 'null' || localStorage.getItem("task"+i) === ""){
      localStorage.setItem("task"+i, value)
      console.log("Succeeded with: task " + i + ", " + value)
      return true
    }
  }

  alert("Error: Max tasks taken")

  return false
}

function delLocalStorage(value) {
  const size = 7
  console.log(value)
  for (let i = 1; i <= size; i++){
    if(localStorage.getItem("task"+i) == value) {
      localStorage.setItem("task"+i, "");
      return;
    }
  }
}