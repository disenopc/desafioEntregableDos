const productoA = [];
class Producto {
    constructor(nombre, categoria, precio, stock, img, id) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.id = id;

    }

};

productoA.push(new Producto("Walt-Can Adulto", "Alimento Balanceado", 1000, 0, "./images/waltcanadulto.jpg", 1))
productoA.push(new Producto("Dog-Chow Adulto", "Alimento Balanceado", 1000, 0, "./images/dogchowadulto.png", 2))
productoA.push(new Producto("Dogui", "Alimento Balanceado", 1000, 0, "./images/dogui.png", 3))
productoA.push(new Producto("Econocan", "Alimento Balanceado", 1000, 0, "./images/econocan.png", 4))
productoA.push(new Producto("Pedigree Adulto", "Alimento Balanceado", 1000, 0, "./images/pedigreeadulto.png", 5))
productoA.push(new Producto("Sabrositos Adulto", "Alimento Balanceado", 1000, 0, "./images/sabrositosadulto.png", 6))
productoA.push(new Producto("Jaspe Adulto", "Alimento Balanceado", 1000, 0, "./images/jaspeadulto.png", 7))
productoA.push(new Producto("Walt-Can Cachorro", "Alimento Balanceado", 1000, 0, "./images/waltcancachorro.png", 8))
productoA.push(new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 0, "./images/jaspecachorro.jpg", 9))
productoA.push(new Producto("Dog-Chow Cachorro", "Alimento Balanceado", 1000, 0, "./images/dogchowcachorro.png", 10))
productoA.push(new Producto("Sabrositos Cachorro", "Alimento Balanceado", 1000, 0, "./images/sabrositoscachorr.png", 11))

const card = document.getElementById("cardDinamica");
for (let array of productoA) {
    const productoL = document.createElement("div");
    productoL.innerHTML += `
        <div class="card mb-3 item" style="width: 18rem;">
          <div class="container card-body">
            <img class="imgArray card-img-top" src="${array.img}" >
            <h3 class="item-title"> ${array.nombre} </h3>
            <p class="card-text">$${array.precio}</p>
            <button id="cardBoton" class="btn btn-warning rounded-pill text-secondary">Agregar al carrito</button>
            </div>
         </div>`
    card.appendChild(productoL);
}


let fondoMenu = document.getElementById("menu");
fondoMenu.style.background = "black";
fondoMenu.style.color = "gray";
console.log(fondoMenu.innerHTML);

let textoBotonUno = document.getElementById("botonUno");
console.log(textoBotonUno.innerHTML);
textoBotonUno.innerHTML = "Inicio";

let textoBotonDos = document.getElementById("botonDos");
console.log(textoBotonDos.innerHTML);
textoBotonDos.innerHTML = "Tienda";

let titulo = document.getElementById("titulo");
titulo.style.font = "bold  50px Source Serif"

let fondoFooter = document.getElementById("newsletter");
fondoFooter.style.background = "black";
fondoFooter.style.color = "white";
console.log(fondoMenu.innerHTML);

//Eventos sobre el dom

//Eventos sobre el Formulario Newsletter

let form = document.getElementById("formulario");
form.addEventListener("click", (e) => botonEnviar(e));
const botonEnviar = (e) => {
    e.preventDefault();
    let email = e.target.parentNode.children[1].value;
    console.log(email);
    createNewSuscriptor({
        email
    });
    console.log(listasuscriptores);

};

class Suscriptor {
    constructor(email, id) {
        this.email = email;
        this.id = id;
    }
};

const createNewSuscriptor = (email) => {
    const id = listasuscriptores.generateId();
    const newSubs = new Suscriptor(email, id);
    listasuscriptores.addSuscriptor(newSubs);
};
class Suscriptores {
    constructor() {
        this.listasuscriptores = [];
    }
    addSuscriptor(suscriptort) {
        this.listasuscriptores.push(suscriptort);
    }
    generateId() {
        return Date.now();
    }
};

const listasuscriptores = new Suscriptores();


//Tecla enter
function capturarP(e) {
    if ((e.which == 13) || (e.keycode == 13)) {
        alert("Escriba un email y luego presione el boton enviar")
    }
};

//Eventos de carrito --Lo deje expresado pero no funciona el codigo. Para la pre entrega 2 sera corregido .
let finC = document.getElementById("cardBoton");
finC.addEventListener("click", (e) => botonCarrito(e));
const botonCarrito = (e) => {
    e.preventDefault();
    let producto = e.target.parentNode.children[0].value;
    let precio = e.target.parentNode.children[1].value;
    let id = e.target.parentNode.children[2].value;
    crearUnCarrito({ producto, precio, id });
    console.log(carritoDeCompras);


}
const crearUnCarrito = (producto, precio, id) => {
    const nuevProd = new Carrito(producto, precio, id);
    carritoDeCompras.agregarProducto(nuevProd);
}

class Carrito {
    constructor(producto, precio, id) {
        this.producto = producto;
        this.precio = precio;
        this.id = id;
    }
    agregarProducto(nuevoElem) {
        this.carritoDeCompras.push(nuevoElem);
    }
}

const carritoDeCompras = new Carrito();