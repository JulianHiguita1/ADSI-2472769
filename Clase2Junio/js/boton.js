btnN1 = document.getElementById("btn-n1");
btnN2 = document.getElementById("btn-n2");
btnN3 = document.getElementById("btn-n3");
btnN4 = document.getElementById("btn-n4");
btnN5 = document.getElementById("btn-n5");
btnN6 = document.getElementById("btn-n6");
nombre = document.getElementById("nombre");
prueba = document.getElementById("prueba");

btnN1.addEventListener("click", function(){
    alert ("Maria");
})

btnN2.addEventListener("click", imprimir)
function imprimir(){
    alert ("Pedro");
}

btnN3.addEventListener("click", mostrarTexto)
function mostrarTexto(){
    if (nombre.value == ""){
        alert("Ingrese un valor para mostrar");
    }else{
        alert(nombre.value);
    }
}

btnN4.addEventListener("mouseover", mostrarTxt)
function mostrarTxt(){
    console.log(prueba.value);
}

btnN5.addEventListener("click", function(){
    alert ("Francia");
})

btnN6.addEventListener("click", function(){
    alert ("Ximena");
})

function mostrar() {
    var x = $("#numero").val();
    console.log(x);
   }