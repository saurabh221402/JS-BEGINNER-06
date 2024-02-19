
function showPage()
{
    let page=document.querySelector(".page");
    page.style.top='80%';

}


document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);
    
   console.log(event);
  });


//   document.addEventListener("drag", function(event) {
//     document.getElementById("demo").style.color = "red";
//   });

//   document.addEventListener("dragend", function(event) {
//     document.getElementById("demo").innerHTML = "Finished dragging the p element.";
//     event.target.style.opacity = "1";
//   });