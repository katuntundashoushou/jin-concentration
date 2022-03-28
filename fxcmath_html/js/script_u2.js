//Unit2
const btn2_1 = document.querySelector('#unit2practice1_btn');
const btn2_2 = document.querySelector('#unit2practice2_btn');
const btn2_3 = document.querySelector('#unit2practice3_btn');

//practice 1
btn2_1.addEventListener('click',clickHandler_p2_q1);
var attempt_p2_q1 = 0

function clickHandler_p2_q1(event) {
var situation2_1 = document.getElementById("situation2_1").value;
if (attempt_p2_q1 < 3){
    if(situation2_1 == "x = 10*40"){
        document.getElementById("practice2_1_result").innerHTML = "Correct!";
        attempt_p2_q1 += 1;
        document.getElementById("practice2_1_attempts").innerHTML = attempt_p2_q1;
    } else{
        attempt_p2_q1 += 1;
        document.getElementById("practice2_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice2_1_attempts").innerHTML = attempt_p2_q1;
    }
} else{
    document.getElementById("practice2_1_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}



//practice 2
btn2_2.addEventListener('click',clickHandler_p2_q2);
var attempt_p2_q2 = 0

function clickHandler_p2_q2(event) {
var situation2_2 = document.getElementById("situation2_2").value;
if (attempt_p2_q2 < 3){
    if(situation2_2 == "x = 2, y = 3"){
        document.getElementById("practice2_2_result").innerHTML = "Correct!";
        attempt_p2_q2 += 1;
        document.getElementById("practice2_2_attempts").innerHTML = attempt_p2_q2;
    } else{
        attempt_p2_q2 += 1;
        document.getElementById("practice2_2_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice2_2_attempts").innerHTML = attempt_p2_q2;
    }
}else{
    document.getElementById("practice2_2_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}

//practice 3
btn2_3.addEventListener('click',clickHandler_p2_q3);
var attempt_p2_q3 = 0

function clickHandler_p2_q3(event) {
var situation2_3 = document.getElementById("situation2_3").value;
if (attempt_p2_q3 < 3){
    if(situation2_3 == "Unbounded"){
        document.getElementById("practice2_3_result").innerHTML = "Correct!";
        attempt_p2_q3 += 1;
        document.getElementById("practice2_3_attempts").innerHTML = attempt_p2_q3;
    } else{
        attempt_p2_q3 += 1;
        document.getElementById("practice2_3_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice2_3_attempts").innerHTML = attempt_p2_q3;
    }
}else{
    document.getElementById("practice2_3_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}