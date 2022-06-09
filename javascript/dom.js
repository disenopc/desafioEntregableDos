const productoA = [];
class Producto {
    constructor(nombre, categoria, precio, stock, img) {
        this.nombre = nombre;
        this.categorio = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;

    }

};

productoA.push(new Producto("Walt-Can Adulto", "Alimento Balanceado", 1000, 0, "./images/waltcanadulto.jpg"))
productoA.push(new Producto("Dog-Chow Adulto", "Alimento Balanceado", 1000, 0, "./images/dogchowadulto.png"))
productoA.push(new Producto("Dogui", "Alimento Balanceado", 1000, 0, "./images/dogui.png"))
productoA.push(new Producto("Econocan", "Alimento Balanceado", 1000, 0, "./images/econocan.png"))
productoA.push(new Producto("Pedigree Adulto", "Alimento Balanceado", 1000, 0, "./images/pedigreeadulto.png"))
productoA.push(new Producto("Sabrositos Adulto", "Alimento Balanceado", 1000, 0, "./images/sabrositosadulto.png"))
productoA.push(new Producto("Jaspe Adulto", "Alimento Balanceado", 1000, 0, "./images/jaspeadulto.png"))
productoA.push(new Producto("Walt-Can Cachorro", "Alimento Balanceado", 1000, 0, "./images/waltcancachorro.png"))
productoA.push(new Producto("Jaspe Cachorro", "Alimento Balanceado", 1000, 0, "./images/jaspecachorro.jpg"))
productoA.push(new Producto("Dog-Chow Cachorro", "Alimento Balanceado", 1000, 0, "./images/dogchowcachorro.png"))
productoA.push(new Producto("Sabrositos Cachorro", "Alimento Balanceado", 1000, 0, "./images/sabrositoscachorr.png"))

const card = document.getElementById("cardDinamica");
for (let array of productoA) {
    const productoL = document.createElement("div");
    productoL.innerHTML += `
        <div class="card mb-3 item" style="width: 18rem;">
          <div class="container card-body">
            <img class="imgArray card-img-top" src="${array.img}" >
            <h3 class="item-title"> ${array.nombre} </h3>
            <p class="card-text">$${array.precio}</p>
            <button class="btn btn-warning rounded-pill text-secondary">Agregar al carrito</button>
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

//Eventos de carrito

let botonesAgregarAlCarrito = document.querySelectorAll('button');
botonesAgregarAlCarrito.forEach(el => {
    el.addEventListener('click', elementosCard)
});

function elementosCard(event) {
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector(".item-title").textContent;
    const itemPrice = item.querySelector(".card-text ").textContent;
    agregarItemAlCarrito(itemTitle, itemPrice);
}

const finC = document.getElementsByClassName(".carrito");

function agregarItemAlCarrito(itemTitle, itemPrice) {
    const seleccionDeCarrito = document.createElement("div");
    const contenidoDelCarrito =
        ` <div class = "modal" tabindex = "-1" >
        <div class = "modal-dialog","modal-content","modal-header" >
        <h4 class = "modal-title">${itemTitle}</h4>
        <h5 class = "modal-title">${itemPrice}</h5>
        <button type = "button"class = "btn-close"data - bs - dismiss = "modal"aria - label = "Close"> </button>
        </div> 
        <div class = "modal-body">
        </div>
        <div class = "modal-footer">
        <button type = "button"  class = "btn btn-secondary" data - bs - dismiss ="modal"> Cerrar</button> 
        </div>`
    seleccionDeCarrito.innerHTML = contenidoDelCarrito;
    contenedorDeItemsDelCarrito.appendChild(seleccionDeCarrito);
};