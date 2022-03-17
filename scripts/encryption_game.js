/* var caesarCount = 0;
var rotCount = 0;
var pigCount = 0;
*/
var count = 0; /*For button to change information */
var rightCount = 0;
var value1 = Math.floor(Math.random()*3); //Determine which Caesar Exercise to show
var value2 = Math.floor(Math.random()*3)+3; //Determine which Pigpen Exercise to show
var value3 = Math.floor(Math.random()*3)+6; //Determine which OTP Exercise to show

console.log("value 1 is " + value1 + ", value 2 is " + value2 + ", value3 is " + value3);



(function(){

  //Caesar values
    var c1 = document.getElementById("caesar1Ex"); //Assign this div to 0, hide if not chosen randomly
    var c2 = document.getElementById("caesar2Ex"); // 1
    var c3 = document.getElementById("caesar3Ex"); // 2

  //Pigpen values
    var p1 = document.getElementById("pigpen1Ex"); // 3
    var p2 = document.getElementById("pigpen2Ex"); // 4
    var p3 = document.getElementById("pigpen3Ex"); // 5

  //OTP values
    var r1 = document.getElementById("OTP1Ex"); // 6
    var r2 = document.getElementById("OTP2Ex"); // 7
    var r3 = document.getElementById("OTP3Ex"); // 8


  //Caesar display checks  
      if(value1 != 0){
        c1.style.display = "none";
        console.log("c1 is not showing");
      }

      if(value1 != 1){
        c2.style.display = "none";
        console.log("c2 is not showing");
      }

      if(value1 != 2){
        c3.style.display = "none";
        console.log("c3 is not showing");
      }

  //Pigpen display check
      if(value2 != 3){
        p1.style.display = "none";
        console.log("p1 is not showing");
      }

      if(value2 != 4){
        p2.style.display = "none";
        console.log("p2 is not showing");
      }

      if(value2 != 5){
        p3.style.display = "none";
        console.log("p3 is not showing");
      }
      
  //OTP display check
      if(value3 != 6){
        r1.style.display = "none";
        console.log("r1 is not showing");
      }

      if(value3 != 7){
        r2.style.display = "none";
        console.log("r2 is not showing");
      }

      if(value3 != 8){
        r3.style.display = "none";
        console.log("r3 is not showing");
      }
})();

//windows.onload = showDivs; //I'm dumb and the reason this wasn't working was because I wasn't calling it because I removed it at one point for testing purposes.


/* Caesar1 check */
function c1completed() {
  
  var input = document.getElementById("c1").value;
  var answer = document.getElementById("c1Ans");
  

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "salad") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Caesar2 check */
function c2completed() {
  var input = document.getElementById("c2").value;
  var answer = document.getElementById("c2Ans");


  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "information") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Caesar3 check */
function c3completed() {
  var input = document.getElementById("c3").value;
  var answer = document.getElementById("c3Ans");


  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "cognition") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Pigpen1 check */
function p1completed() {
  var input = document.getElementById("p1").value;
  var answer = document.getElementById("p1Ans");

  
  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "taco") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;
    

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};


/* Pigpen2 check */
function p2completed() {
  var input = document.getElementById("p2").value;
  var answer = document.getElementById("p2Ans");


  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "orange") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Pigpen3 check */
function p3completed() {
  var input = document.getElementById("p3").value;
  var answer = document.getElementById("p3Ans");


  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "amazing") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Rotation1 check */
function r1completed() {
  var input = document.getElementById("r1").value;
  var answer = document.getElementById("r1Ans");
  

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase() == "wheel") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Rotation2 check */
function r2completed() {
  var input = document.getElementById("r2").value;
  var answer = document.getElementById("r2Ans");


  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input .toLowerCase()  == "school") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};

/* Rotation3 check */
function r3completed() {
  var input = document.getElementById("r3").value;
  var answer = document.getElementById("r3Ans");
  
  
  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input.toLowerCase == "encryption") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 3){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      alert("Correct!");
    }

  } else {
    answer.innerHTML = "Wrong; try again";
    //alert("Wrong; try again");
  }

};


/*
var rotation = document.getElementById("rotational_ex"),
    count = 0;
var quiz = document.getElementById("question");
/*
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var key = document.getElementById("key");
rotation.onclick = function() {
  count +=  1;
  if(count === 1){
    alert("It worked!");
    quiz.value = "AHBNWKRDJH \n key = 4 6 1 4 2 5 2 5 5 6";
    /*
    question.value = "AHBNWKRDJH"
    key.value = "4 6 1 4 2 5 2 5 5 6"
    answer.value = "ENCRYPTION"
  }
};
*/