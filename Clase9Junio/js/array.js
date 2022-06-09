/*const num = 3;
let nombre = ["Juliana", "Marbel", "Zuluaga", "Velez", "Santos"];
edad = [18,14,15,92,78,63];
let correo = [
    "juliana@jhjads.com",
    "marbel@hajsdh.com",
    "zuluaga@ghsa.com",
    "velez@agsdh.com",
    "santos@gdsf.com"
];
console.log(nombre);
console.log(correo.length)
console.log(edad[2]);
*/

//Arrays
let nombres = ["Julian", "Felipe", "Manuela", "Sofia", "Pedro"];
let apellidos = ["Arboleda","Marin","Usuga","Bedoya", "Higuita"]
let edades = [17,12,23,19,33];
let telefono = ["3052209125", "1111113", "1111114", "1111115", "1111116"]
let direccion = ["CARRERA 24 DD #41sur-190", "DIAGONAL 42", "CALLE 76", "CARRERA 56", "CALLE 12"]

//objetos
let persona = {"Nombre ":"Luis", "Apellido ":"Becerra", "Gustos ":["futbol","basquet","natacion"]};
console.log(persona)

let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"20220202",
    "duracion":10
},{
    "nombre":"ADSO",
    "id":"2",
    "fecha":"20230202",
    "duracion":110,
    "valor":"gratis"
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"20230103",
    "duracion":5
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"20211230",
    "duracion":10
}];

console.log(cursos);
//----------------------------------------------------

nombres.forEach(element => {
    console.log(`Nombre: ${element}`);
});




/*
for (let i = 0; i < nombres.length; i++){

    console.log(nombres[i] + " " + apellidos[i] + " " + 
    edades[i] + " " + telefono[i] + " " + direccion[i]);

    console.log(`Nombre: ${nombres[i]} Apellido: ${apellidos[i]} Edad:${edades[i]} Telefono: ${telefono[i]} Dirección: ${direccion[i]}`);

} 
console.log("Nombre1: " + nombres[0] + "\n" +
            "Apellido1: " + apellidos[0] + "\n" +
            "Edad1: " + edades[0] + "\n" +
            "Telefono1: " + telefono[0] + "\n" +
            "Dirección1: " + direccion[0]);

console.log("Nombre2: " + nombres[1] + "\n" +
            "Apellido2: " + apellidos[1] + "\n" +
            "Edad2: " + edades[1] + "\n" +
            "Telefono2: " + telefono[1] + "\n" +
            "Dirección2: " + direccion[1]);
        
console.log("Nombre3: " + nombres[2] + "\n" +
            "Apellido3: " + apellidos[2] + "\n" +
            "Edad3: " + edades[2] + "\n" +
            "Telefono3: " + telefono[2] + "\n" +
            "Dirección3: " + direccion[2]);

console.log("Nombre4: " + nombres[3] + "\n" +
            "Apellido4: " + apellidos[3] + "\n" +
            "Edad4: " + edades[3] + "\n" +
            "Telefono4: " + telefono[3] + "\n" +
            "Dirección4: " + direccion[3]);

console.log("Nombre5: " + nombres[4] + "\n" +
            "Apellido5: " + apellidos[4] + "\n" +
            "Edad5: " + edades[4] + "\n" +
            "Telefono5: " + telefono[4] + "\n" +
            "Dirección5: " + direccion[4]);*/

