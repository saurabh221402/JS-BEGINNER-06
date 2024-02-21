# draggable-bottom-sheet
<p>
/*
<br>
all about drag event in javascript
</p>
<p draggable="true" id="dragtarget">Drag me!</p>

<div class="droptarget">Drop here!</div>
<p>
<script>
  <br>
// Events fired on the drag target
<br>
document.addEventListener("dragstart", function(event) {<br>
  // The dataTransfer.setData() method sets the data type and the value of the dragged data<br>
  event.dataTransfer.setData("Text", event.target.id);<br>

  // Output some text when starting to drag the p element<br>
  document.getElementById("demo").innerHTML = "Started to drag the p element.";<br>

  // Change the opacity of the draggable element<br>
  event.target.style.opacity = "0.4";<br>
});<br>

// While dragging the p element, change the color of the output text<br>
document.addEventListener("drag", function(event) {<br>
  document.getElementById("demo").style.color = "red";<br>
});
<br>
// Output some text when finished dragging the p element and reset the opacity<br>
document.addEventListener("dragend", function(event) {<br>
  document.getElementById("demo").innerHTML = "Finished dragging the p element.";<br>
  event.target.style.opacity = "1";<br>
});<br>


// Events fired on the drop target<br>

// When the draggable p element enters the droptarget, change the DIVS's border style<br>
document.addEventListener("dragenter", function(event) {<br>
  if ( event.target.className == "droptarget" ) {<br>
    event.target.style.border = "3px dotted red";<br>
  }
});<br>

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element<br>
document.addEventListener("dragover", function(event) {<br>
  event.preventDefault();<br>
});<br>

// When the draggable p element leaves the droptarget, reset the DIVS's border style<br>
document.addEventListener("dragleave", function(event) {<br>
  if ( event.target.className == "droptarget" ) {<br>
    event.target.style.border = "";<br>
  }
});<br>

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)<br>
Reset the color of the output text and DIV's border color<br>
Get the dragged data with the dataTransfer.getData() method<br>
The dragged data is the id of the dragged element ("drag1")<br>
Append the dragged element into the drop element<br>
*/<br>
document.addEventListener("drop", function(event) {<br>
  event.preventDefault();<br>
  if ( event.target.className == "droptarget" ) {<br>
    document.getElementById("demo").style.color = "";<br>
    event.target.style.border = "";<br>
    var data = event.dataTransfer.getData("Text");<br>
    event.target.appendChild(document.getElementById(data));<br>
  }
});<br>
</script>
*/
</p>
