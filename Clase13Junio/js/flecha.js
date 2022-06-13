//sin parametros y retornando valores
function suma(){
    let n1 = 4;
    let n2 = 3;
    let sum = n1 + n2;
    return sum;
}
//console.log ("Resultado suma: " + suma());

//con parametros retornando valores
function resta(n1,n2){
    let resta = n1 - n2;
    return resta;
} 
//console.log("Resultado resta: " + resta(90,10))

//saca el valor mas otro que añadamos
const fun = (mensa) => {
    let n1 = 2;
    let n2 = 3;
    su = n1+n2;
    return su + mensa;
}
//console.log(fun(", hola"));

//----------------------------------------

/*funcion normal
function getNombre(){
    let nombre = "Maria";
    return nombre;
}

//Funcion flecha getNombre
const getNombre = () => "Maria";

console.log(getNombre());

//Funcion flecha apellido
let apellido;
apellido = "alonsa";
apellido => console.log(apellido());


let multi = (n1,n2 = 40)=>{
    let res = n1*n2;
    let mensaje = `el resultado de la multiplicacion es: ${res}` 
    return mensaje;
}
console.log(multi(10))*/

let contador = document.getElementById("caja");
let total = 0;

setInterval(()=>{
    total +=  1; 
    console.log(total);
    contador.innerHTML = total;
}, 2000)

