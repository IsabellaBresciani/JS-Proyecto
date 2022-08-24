class Productos{
    constructor(imagen,titulo,precio){
        this.imagen=imagen
        this.titulo=titulo
        this.precio=precio
    }
}
const prod1 = new Productos("../footage/short.jpeg", "Short maternal ONA","$4999")
const prod2 = new Productos("../footage/pantalon.jpeg", "Pantalon maternal bianca","$9300")
const prod3 = new Productos("../footage/palazo.jpeg", "Palazzo maternal malena","$8300")
const prod4 = new Productos("../footage/camiseta.jpeg", "Camiseta Sarah","$7000")
const prod5 = new Productos("../footage/buzo.png", "Buzo maternal Sofia","$11000")
const prod6 = new Productos("../footage/remera.png", "Remera LORE","$5000")

const sectionProductos = [prod1,prod2,prod3,prod4,prod5,prod6]
const productos = document.getElementById("productos")
sectionProductos.forEach((prod) => {
    productos.innerHTML += `
    <article class="blog">
        <img src=${prod.imagen}>
        <h4>${prod.titulo}</h4>
        <p>${prod.precio}</p>
        <button>agregar al carrito</button>
    </article>
    `
})

