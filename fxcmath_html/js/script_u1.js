//Unit1
const btn1_1 = document.querySelector('#unit1practice1_btn');
const btn1_2 = document.querySelector('#unit1practice2_btn');
const btn1_3 = document.querySelector('#unit1practice3_btn');

//practice 1
btn1_1.addEventListener('click',clickHandler_p1_q1);
var attempt_p1_q1 = 0

function clickHandler_p1_q1(event) {
var situation1_1 = document.getElementById("situation1_1").value;
if (attempt_p1_q1 < 3){
    if(situation1_1 == "Unimodal"){
        document.getElementById("practice1_1_result").innerHTML = "Correct!";
        attempt_p1_q1 += 1;
        document.getElementById("practice1_1_attempts").innerHTML = attempt_p1_q1;
    } else{
        attempt_p1_q1 += 1;
        document.getElementById("practice1_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice1_1_attempts").innerHTML = attempt_p1_q1;
    }
}else{
    document.getElementById("practice1_1_result").innerHTML = "Review Unit 1 distribution shapes and try again!";
}
}
//practice 2
btn1_2.addEventListener('click',clickHandler_p1_q2);
var attempt_p1_q2 = 0

function clickHandler_p1_q2(event) {
var situation1_2 = document.getElementById("situation1_2").value;
if (attempt_p1_q2 < 3){
    if(situation1_2 == "44.8"){
        document.getElementById("practice1_2_result").innerHTML = "Correct!";
        attempt_p1_q2 += 1;
        document.getElementById("practice1_2_attempts").innerHTML = attempt_p1_q2;
    } else{
        attempt_p1_q2 += 1;
        document.getElementById("practice1_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice1_2_attempts").innerHTML = attempt_p1_q2;
    }
}else{
    document.getElementById("practice1_2_result").innerHTML = "To find mean, try adding all of the numbers together and dividing by the number of items in the set.";
}
}

//practice 3
btn1_3.addEventListener('click',clickHandler_p1_q3);
var attempt_p1_q3 = 0

function clickHandler_p1_q3(event) {
var situation1_3 = document.getElementById("situation1_3").value;
if (attempt_p1_q3 < 3){
    if(situation1_3 == "Median and mean both increased."){
        document.getElementById("practice1_3_result").innerHTML = "Correct!";
        attempt_p1_q3 += 1;
        document.getElementById("practice1_3_attempts").innerHTML = attempt_p1_q3;
    } else{
        attempt_p1_q3 += 1;
        document.getElementById("practice1_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice1_3_attempts").innerHTML = attempt_p1_q3;
    }
}else{
    document.getElementById("practice1_3_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}