//Unit3 Practice 
const btn3_1 = document.querySelector('#unit3practice1_btn');
const btn3_2 = document.querySelector('#unit3practice2_btn');
const btn3_3 = document.querySelector('#unit3practice3_btn');

//practice 1
btn3_1.addEventListener('click',clickHandler_p3_q1);
var attempt_p3_q1 = 0

function clickHandler_p3_q1(event) {
var situation3_1 = document.getElementById("situation3_1").value;
if (attempt_p3_q1 < 3){
    if(situation3_1 == "0.83"){
        document.getElementById("practice3_1_result").innerHTML = "Correct!";
        attempt_p3_q1 += 1;
        document.getElementById("practice3_1_attempts").innerHTML = attempt_p3_q1;
    } else{
        attempt_p3_q1 += 1;
        document.getElementById("practice3_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice3_1_attempts").innerHTML = attempt_p3_q1;
    }
}else{
    document.getElementById("practice3_1_result").innerHTML = "Review Unit 3 two-way tables and try again!";
}
}
//practice 2
btn3_2.addEventListener('click',clickHandler_p3_q2);
var attempt_p3_q2 = 0

function clickHandler_p3_q2(event) {
var situation3_2 = document.getElementById("situation3_2").value;
if (attempt_p3_q2 < 3){
    if(situation3_2 == "Categorical variable: Art Classes; Categories: Ceramics, Studio Art."){
        document.getElementById("practice3_2_result").innerHTML = "Correct!";
        attempt_p3_q2 += 1;
        document.getElementById("practice3_2_attempts").innerHTML = attempt_p3_q2;
    } else{
        attempt_p3_q2 += 1;
        document.getElementById("practice3_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice3_2_attempts").innerHTML = attempt_p3_q2;
    }
}else{
    document.getElementById("practice3_2_result").innerHTML = "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}

//practice 3
btn3_3.addEventListener('click',clickHandler_p3_q3);
var attempt_p3_q3 = 0

function clickHandler_p3_q3(event) {
var situation3_3 = document.getElementById("situation3_3").value;
if (attempt_p3_q3 < 3){
    if(situation3_3 == "No, it has a weak correlation(relationship)."){
        document.getElementById("practice3_3_result").innerHTML = "Correct!";
        attempt_p3_q3 += 1;
        document.getElementById("practice3_3_attempts").innerHTML = attempt_p3_q3;
    } else{
        attempt_p3_q3 += 1;
        document.getElementById("practice3_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice3_3_attempts").innerHTML = attempt_p3_q3;
    }
}else{
    document.getElementById("practice3_3_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}