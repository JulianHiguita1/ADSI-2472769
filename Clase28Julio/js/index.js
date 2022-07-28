let formulario = document.getElementById("product-form");

formulario.addEventListener("submit", (e)=>{
    
    
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let ano = document.getElementById("ano").value;
    e.preventDefault();
    
    // console.log(nombre, precio, ano);
    // console.log(new Productos(nombre, precio, ano)); 
    let inter = new UI();
    inter.addProduct(new Product(nombre, precio, ano));
    inter.clearProduct();
    
});

class Product{
    constructor(nombre, precio, ano){
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;
    }
};

class UI{
    addProduct(Product){
        let productList = document.getElementById('product-list');
        let element = document.createElement('div');

        if(nombre.value == "" || precio.value == "" || ano.value==""){
            Swal.fire({
                title: 'LLENE TODOS LOS CAMPOS!!',
                timer: 2000,
                icon: 'warning',
                showConfirmButton: false
              })
        }else{

            element.innerHTML =`
            <div class='card text-center mb-4'>
                <div class='card-body row'>
                    <div class="col-md-10">
                        <strong>Nombre: ${Product.nombre}</strong>
                        <br>
                        <strong>Precio: ${Product.precio}</strong>
                        <br>
                        <strong>Año: ${Product.ano}</strong>
                    </div>
                    <div class="col-md-2">
                        <a href="#" class='btn btn-danger mt-3' name='delete'>
                            Borrar
                        </a>
                    </div>
                </div>
            </div>`
            ;
    
            productList.appendChild(element);
    
            Swal.fire({
                title: 'Producto agregado con exito',
                timer: 2000,
                icon: 'success',
                showConfirmButton: false
              })
        }
        
    }

    deleteProduct(element){
        if(element.name=='delete'){
            element.parentElement.parentElement.parentElement.remove();
            Swal.fire({
                icon: 'success',
                title: 'Producto borrado con exito',
                showConfirmButton: false,
                timer: 2000
              })
        }
    }

    clearProduct(){
        document.getElementById('product-form').reset();
    }

    showMessage(){}
}

let lista = document.getElementById('product-list');
lista.addEventListener('click', function(e){
    let inter = new UI();
    inter.deleteProduct(e.target);
});