//Insert code here to do things



function openMenu() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  
  function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

/* Collapsible script */
var coll = document.getElementsByClassName("collapsible");
var i;
var x = 0;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    x++;
    console.log("Clicked" + x + " times");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}