
function showPage()
{
    let page=document.querySelector(".page");
    
    page.style.top='80%'; 

}

let height= innerHeight;
document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
   // event.dataTransfer.setData("Text", event.target.id);
    
   console.log(event);
  });


  document.addEventListener("drag", function(event) {
    let x=event.clientY;
    let page=document.querySelector(".page");
    if(page.style.height<60+"vh")
    page.style.top=x+"px";
    page.style.height=height-x+10+"px";
  });

//   document.addEventListener("dragend", function(event) {
//     document.getElementById("demo").innerHTML = "Finished dragging the p element.";
//     event.target.style.opacity = "1";
//   });