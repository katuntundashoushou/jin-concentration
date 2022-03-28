//Unit 6
const btn6_1 = document.querySelector('#unit6practice1_btn');
const btn6_2 = document.querySelector('#unit6practice2_btn');
const btn6_3 = document.querySelector('#unit6practice3_btn');

//practice 1
btn6_1.addEventListener('click',clickHandler_p6_q1);
var attempt_p6_q1 = 0

function clickHandler_p6_q1(event) {
var situation6_1 = document.getElementById("situation6_1").value;
if (attempt_p6_q1 < 3){
    if(situation6_1 == "2^x+2"){
        document.getElementById("practice6_1_result").innerHTML = "Correct!";
        attempt_p6_q1 += 1;
        document.getElementById("practice6_1_attempts").innerHTML = attempt_p6_q1;
    } else{
        attempt_p6_q1 += 1;
        document.getElementById("practice6_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice6_1_attempts").innerHTML = attempt_p6_q1;
    }
}else{
    //document.getElementById("practice_1_schedule_appointment").innerHTML = 
  //  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 2
btn6_2.addEventListener('click',clickHandler_p6_q2);
var attempt_p6_q2 = 0

function clickHandler_p6_q2(event) {
var situation6_2 = document.getElementById("situation6_2").value;
if (attempt_p6_q2 < 3){
    if(situation6_2 == "x^2+8x+15"){
        document.getElementById("practice6_2_result").innerHTML = "Correct!";
        attempt_p6_q2 += 1;
        document.getElementById("practice6_2_attempts").innerHTML = attempt_p6_q2;
    } else{
        attempt_p6_q2 += 1;
        document.getElementById("practice6_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice6_2_attempts").innerHTML = attempt_p6_q2;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 3
btn6_3.addEventListener('click',clickHandler_p6_q3);
var attempt_p6_q3 = 0

function clickHandler_p6_q3(event) {
var situation6_3 = document.getElementById("situation6_3").value;
if (attempt_p6_q3 < 3){
    if(situation6_3 == "x(x+3)"){
        document.getElementById("practice6_3_result").innerHTML = "Correct!";
        attempt_p6_q3 += 1;
        document.getElementById("practice6_3attempts").innerHTML = attempt_p6_q3;
    } else{
        attempt_p6_q3 += 1;
        document.getElementById("practice6_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice6_3_attempts").innerHTML = attempt_p6_q3;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}