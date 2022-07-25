let formulario = document.getElementById("product-form");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let ano = document.getElementById("ano").value;
    
    // console.log(nombre, precio, ano);
    // console.log(new Productos(nombre, precio, ano)); 
    let inter = new UI();
    inter.addProduct(new Productos(nombre, precio, ano));
    inter.clearProduct();
    
});

class Productos{
    constructor(nombre, precio, ano){
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;
    }
};

class UI{
    addProduct(Productos){
        let productList = document.getElementById('product-list');
        let element = document.createElement('div');
        element.innerHTML =`
        <div class='card text-center mb-4'>
            <div class='card-body row'>
                <div class="col-md-10">
                    <strong>Nombre: ${Productos.nombre}</strong>
                    <strong>Precio: ${Productos.precio}</strong>
                    <strong>Año: ${Productos.ano}</strong>
                </div>
                <div class="col-md-2">
                    <a href="#" class='btn btn-danger' name='delete'>
                        Borrar
                    </a>
                </div>
            </div>
        </div>`;

        productList.appendChild(element);

    }

    deleteProduct(){}

    clearProduct(){
        document.getElementById('product-form').reset();
    }

    showMessage(){}
}