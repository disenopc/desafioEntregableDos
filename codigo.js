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
        <div class="card mb-3" style="width: 18rem;">
          <div class="container card-body">
            <img class="imgArray card-img-top" src="${array.img}" >
            <h3> ${ array.nombre} </h3>
            <p class="card-text">$${array.precio}</p>
            <button id="agregar" class="btn btn-warning rounded-pill text-secondary">Agregar al carrito</button>
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

// const pedido = [];

// for (let i = 0; i < 2; i++) {
//     pedido.push(prompt("Ingresar productos"));
// }

// let ul = document.createElement("ul");
// let inner = "";
// for (const lista of pedido) {
//     inner += `<li>${lista}</li>`;
// }

// ul.innerHTML = inner;
// document.body.appendChild(ul);


//Eventos sobre el dom

//Formulario Newsletter