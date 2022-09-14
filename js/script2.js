class Productos{
    constructor(imagen,titulo,precio,id){
        this.imagen=imagen
        this.titulo=titulo
        this.precio=precio
        this.id=id
    }
}

const prod1 = new Productos("../footage/short.jpeg", "Short maternal ONA","$4999","1")
const prod2 = new Productos("../footage/pantalon.jpeg", "Pantalon maternal bianca","$9300","2")
const prod3 = new Productos("../footage/palazo.jpeg", "Palazzo maternal malena","$8300","3")
const prod4 = new Productos("../footage/camiseta.jpeg", "Camiseta Sarah","$7000","4")
const prod5 = new Productos("../footage/buzo.png", "Buzo maternal Sofia","$11000","5")
const prod6 = new Productos("../footage/remera.png", "Remera LORE","$5000","6")

const productos = document.getElementById("productos")



const sectionProductos = []


async function loadProds() {
    const response = await fetch('../json/productos.json');
    const prods = await response.json();
    prods.forEach(prod => {
        console.log(prod)
        sectionProductos.push(prod)
    })
}

loadProds()


sectionProductos.forEach((prod) => {
    productos.innerHTML += `
    <article class="blog">
        <img src=${prod.imagen}>
        <h4>${prod.titulo}</h4>
        <p>${prod.precio}</p>
        <button class="buttonCarrito" id="carrito${prod.id}">agregar al carrito</button>
    </article>
    `
})
console.log(sectionProductos)

let button
const botones = []
let compra = []

if (localStorage.getItem("Carrito")){
    compra = JSON.parse(localStorage.getItem("Carrito"))
}else{
    localStorage.setItem("Carrito",JSON.stringify(compra))
}

for (i=1;i<=sectionProductos.length;i++){
    button = document.getElementById(`carrito${i}`)
    botones.push(button)
}

botones.forEach((button)=> (
    button.addEventListener("click",()=>{
        compra.push(sectionProductos[botones.indexOf(button)])
        localStorage.setItem("Carrito",JSON.stringify(compra))
        Swal.fire(
            'Añadiste este producto al carrito de compras!',
            'Felicidades!',
            'success'
        )
    })
))

const carro = document.getElementById("carro")



    


