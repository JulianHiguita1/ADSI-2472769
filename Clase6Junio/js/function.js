let nombre = document.getElementById("txtNombre");
let cedula = document.getElementById("txtCedula");
let valida = document.getElementById("btnValida");
let mensaje = document.getElementById("mensaje1");
let mensaje2 = document.getElementById("mensaje2");

validar.addEventListener("click", validar);

function validar(){
    if (nombre.value == ""){
        nombre.style.borderColor = "red";
        nombre.style.borderStyle = "dashed";
        mensaje.innerHTML = "Ingrese su nombre";
        mensaje.style.color = "red";
    }

    if (cedula.value == ""){
        cedula.style.borderColor = "red";
        cedula.style.borderStyle = "dashed";
        mensaje2.innerHTML = "Ingrese su cedula";
        mensaje2.style.color = "red";
    }
    
}