//Unit4
const btn4_1 = document.querySelector('#unit4practice1_btn');
const btn4_2 = document.querySelector('#unit4practice2_btn');
const btn4_3 = document.querySelector('#unit4practice3_btn');

//practice 1,2,3
btn4_1.addEventListener('click',clickHandler_p4_q1);

var attempt_p4_q1 = 0

function clickHandler_p4_q1(event) {
var situation4_1 = document.getElementById("situation4_1").value;
var situation4_2 = document.getElementById("situation4_2").value;
var situation4_3 = document.getElementById("situation4_3").value;
if (attempt_p4_q1 < 3){
    if(situation4_1 == "Day 1" && situation4_2 == "Day 2" && situation4_3 == "Day 3"){
        document.getElementById("practic4e_1_result").innerHTML = "Correct!";
    } else{
        attempt_p4_q1 += 1;
        document.getElementById("practice4_1_result").innerHTML = "Not quite! Please try again!";
        document.getElementById("practice4_1_attempts").innerHTML = attempt_p4_q1;
    }
}else{
    document.getElementById("practice4_1_schedule_appointment").innerHTML = 
    "Need help with this concept? Schedule an appointment at <a href=\"/Users/catherinejin/Desktop/fxcmath_html/appointment.html\" target =\"_blank\"> our appointment page </a>";
}
}