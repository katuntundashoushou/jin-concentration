//Unit 7
const btn7_1 = document.querySelector('#unit7practice1_btn');
const btn7_2 = document.querySelector('#unit7practice2_btn');
const btn7_3 = document.querySelector('#unit7practice3_btn');
//practice 1
btn7_1.addEventListener('click',clickHandler_p7_q1);
var attempt_p7_q1 = 0

function clickHandler_p7_q1(event) {
var situation7_1 = document.getElementById("situation7_1").value;
if (attempt_p7_q1 < 3){
    if(situation7_1 == "n=8"){
        document.getElementById("practice7_1_result").innerHTML = "Correct!";
        attempt_p7_q1 += 1;
        document.getElementById("practice7_1_attempts").innerHTML = attempt_p7_q1;
    } else{
        attempt_p7_q1 += 1;
        document.getElementById("practice7_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice7_1_attempts").innerHTML = attempt_p7_q1;
    }
}else{
    //document.getElementById("practice_1_schedule_appointment").innerHTML = 
  //  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 2
btn7_2.addEventListener('click',clickHandler_p7_q2);
var attempt_p7_q2 = 0

function clickHandler_p7_q2(event) {
var situation7_2 = document.getElementById("situation7_2").value;
if (attempt_p7_q2 < 3){
    if(situation7_2 == "(x+2)^2=-1"){
        document.getElementById("practice7_2_result").innerHTML = "Correct!";
        attempt_p7_q2 += 1;
        document.getElementById("practice7_2_attempts").innerHTML = attempt_p7_q2;
    } else{
        attempt_p7_q2 += 1;
        document.getElementById("practice7_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice7_2_attempts").innerHTML = attempt_p7_q2;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 3
btn7_3.addEventListener('click',clickHandler_p7_q3);
var attempt_p7_q3 = 0

function clickHandler_p7_q3(event) {
var situation7_3 = document.getElementById("situation7_3").value;
if (attempt_p7_q3 < 3){
    if(situation7_3 == "x = 10*40"){
        document.getElementById("practice7_3_result").innerHTML = "Correct!";
        attempt_p7_q3 += 1;
        document.getElementById("practice7_3attempts").innerHTML = attempt_p7_q3;
    } else{
        attempt_p7_q3 += 1;
        document.getElementById("practice7_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice7_3_attempts").innerHTML = attempt_p7_q3;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}