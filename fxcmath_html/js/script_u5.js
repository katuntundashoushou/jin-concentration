//Unit 5
const btn5_1 = document.querySelector('#unit5practice1_btn');
const btn5_2 = document.querySelector('#unit5practice2_btn');
const btn5_3 = document.querySelector('#unit5practice3_btn');

//practice 1
btn5_1.addEventListener('click',clickHandler_p5_q1);
var attempt_p5_q1 = 0

function clickHandler_p5_q1(event) {
var situation5_1 = document.getElementById("situation5_1").value;
if (attempt_p5_q1 < 3){
    if(situation5_1 == "f(x)= 20*6^x"){
        document.getElementById("practice5_1_result").innerHTML = "Correct!";
        attempt_p5_q1 += 1;
        document.getElementById("practice5_1_attempts").innerHTML = attempt_p5_q1;
    } else{
        attempt_p5_q1 += 1;
        document.getElementById("practice5_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice5_1_attempts").innerHTML = attempt_p5_q1;
    }
}else{
    document.getElementById("practice_1_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 2
btn5_2.addEventListener('click',clickHandler_p5_q2);
var attempt_p5_q2 = 0

function clickHandler_p5_q2(event) {
var situation5_2 = document.getElementById("situation5_2").value;
if (attempt_p5_q2 < 3){
    if(situation5_2 == "21.6"){
        document.getElementById("practice5_2_result").innerHTML = "Correct!";
        attempt_p5_q2 += 1;
        document.getElementById("practice5_2_attempts").innerHTML = attempt_p5_q2;
    } else{
        attempt_p5_q2 += 1;
        document.getElementById("practice5_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice5_2_attempts").innerHTML = attempt_p5_q2;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}
//practice 3
btn5_3.addEventListener('click',clickHandler_p5_q3);
var attempt_p5_q3 = 0

function clickHandler_p5_q3(event) {
var situation5_3 = document.getElementById("situation5_3").value;
if (attempt_p5_q3 < 3){
    if(situation5_3 == "40.5"){
        document.getElementById("practice5_3_result").innerHTML = "Correct!";
        attempt_p5_q3 += 1;
        document.getElementById("practice5_3attempts").innerHTML = attempt_p5_q3;
    } else{
        attempt_p5_q3 += 1;
        document.getElementById("practice5_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice5_3_attempts").innerHTML = attempt_p5_q3;
    }
}else{
//    document.getElementById("practice__schedule_appointment").innerHTML = 
//  "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}