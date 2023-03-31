/* Change text in boxes for information */
var count = 0; /*For button to change information */
var button = document.getElementById("info");
var text = document.getElementById("reason");

button.onclick = function(){
  count += 1;
  if (count % 2 === 0) {
    button.innerHTML = "Why do we use encryption?";
    text.value =
      "The way we use encryption is with three key components after receiving the data: the cryptographic algorithm, the cryptographic key, and the encrypted message.  It protects not only the privacy, but also the integrity of the data being sent over.  There are many different algorithms used to encrypt data, which will affect the resulting key, and resulting message, as well.";
  } else {
    button.innerHTML = "How do we use encryption?";
    text.value =
      "We use encryption to protect sensitive information that is stored on our computers, or passed through the internet. Things like bank account information, online payments, and passwords are encrypted to prevent unwanted sharing of that sensitive information.";
  }
};

//Button functionality
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