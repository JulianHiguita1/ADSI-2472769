
let aux = document.getElementById("cuadro1")
let z = [aux];

let colors = ["red", "orange", "blue", "purple", "pink", "yellow","cyan"];

function rnd(min, max) {
    return Math.round(Math.random() * (max - min) + min,1);
}

setInterval(
    () => {

        z[z.length - 1].style = "white";
        let t = document.getElementById("cuadro" + rnd(1, 35));
        let r =rnd( 0, colors.length -1);
        t.style.background = colors[r];
        z.push(t);

    }, 100

)