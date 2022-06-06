let bnt1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
let bnt3 = document.getElementById("btn3");
let bnt4 = document.getElementById("btn4");
let bnt5 = document.getElementById("btn5");
let bnt6 = document.getElementById("btn6");
let bnt7 = document.getElementById("btn7");
let bnt8 = document.getElementById("btn8");
let bnt9 = document.getElementById("btn9");

let btn1 = document.getElementById("btn1.1");
let btn2 = document.getElementById("btn2.2");
let btn3 = document.getElementById("btn3.3");
let btn4 = document.getElementById("btn4.4");
let btn5 = document.getElementById("btn5.5");
let btn6 = document.getElementById("btn6.6");
let btn7 = document.getElementById("btn7.7");
let btn8 = document.getElementById("btn8.8");
let btn9 = document.getElementById("btn9.9");

let btn11 = document.getElementById("btn1-1");
let btn22 = document.getElementById("btn2-2");
let btn33 = document.getElementById("btn3-3");
let btn44 = document.getElementById("btn4-4");
let btn55 = document.getElementById("btn5-5");
let btn66 = document.getElementById("btn6-6");
let btn77 = document.getElementById("btn7-7");
let btn88 = document.getElementById("btn8-8");
let btn99 = document.getElementById("btn9-9");


bnt1.addEventListener("click",color1)
bnt2.addEventListener("click",color2)
bnt3.addEventListener("click",color3)
bnt4.addEventListener("click",color4)
bnt5.addEventListener("click",color5)
bnt6.addEventListener("click",color6)
bnt7.addEventListener("click",color7)
bnt8.addEventListener("click",color8)
bnt9.addEventListener("click",color9)

btn11.addEventListener("click",color11)
btn22.addEventListener("click",color22)
btn33.addEventListener("click",color33)
btn44.addEventListener("click",color44)
btn55.addEventListener("click",color55)
btn66.addEventListener("click",color66)
btn77.addEventListener("click",color77)
btn88.addEventListener("click",color88)
btn99.addEventListener("click",color99)

function color1(){
    btn1.classList.add("fondo1");
}

function color2(){
    btn2.classList.add("fondo2");
}

function color3(){
    btn3.classList.add("fondo3");
}

function color4(){
    btn4.classList.add("fondo4");
}

function color5(){
    btn5.classList.add("fondo5");
}

function color6(){
    btn6.classList.add("fondo6");
}

function color7(){
    btn7.classList.add("fondo7");
}

function color8(){
    btn8.classList.add("fondo8");
}

function color9(){
    btn9.classList.add("fondo9");
}



function color11(){
    btn1.classList.remove("fondo1");
}

function color22(){
    btn2.classList.remove("fondo2");
}

function color33(){
    btn3.classList.remove("fondo3");
}

function color44(){
    btn4.classList.remove("fondo4");
}

function color55(){
    btn5.classList.remove("fondo5");
}

function color66(){
    btn6.classList.remove("fondo6");
}

function color77(){
    btn7.classList.remove("fondo7");
}

function color88(){
    btn8.classList.remove("fondo8");
}

function color99(){
    btn9.classList.remove("fondo9");
}