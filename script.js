var Form1 = document.getElementById("form1")
var Form2 = document.getElementById("form2")
var Form3 = document.getElementById("form3")


var Next1 = document.getElementById("next1")
var Next2 = document.getElementById("next2")
var Next3 = document.getElementById("next3")
var Back1 = document.getElementById("back1")
var Back2 = document.getElementById("back2")

Next1.onclick = function(){
    Form1.style.left="-600px";
    Form2.style.left="5px";
}

Next2.onclick = function(){
    Form2.style.left="600px";
    Form3.style.left="5px";
}

Back2.onclick = function(){
    Form3.style.left="600px";
    Form2.style.left="5px";
}

Back1.onclick = function(){
    Form2.style.left="-600px";
    Form1.style.left="5px";
}


