class Productos{
    constructor(imagen,titulo,precio,id){
        this.imagen=imagen
        this.titulo=titulo
        this.precio=precio
        this.id=id
    }
}

class Blogs{
    constructor(imagen,titulo,detalle,fecha){
        this.imagen=imagen
        this.titulo=titulo
        this.detalle=detalle
        this.fecha=fecha
    }
}

const prod1 = new Productos("../footage/short.jpeg", "Short maternal ONA","$4999","1")
const prod2 = new Productos("../footage/pantalon.jpeg", "Pantalon maternal bianca","$9300","2")
const prod3 = new Productos("../footage/palazo.jpeg", "Palazzo maternal malena","$8300","3")
const prod4 = new Productos("../footage/camiseta.jpeg", "Camiseta Sarah","$7000","4")
const prod5 = new Productos("../footage/buzo.png", "Buzo maternal Sofia","$11000","5")
const prod6 = new Productos("../footage/remera.png", "Remera LORE","$5000","6")
const blog1 = new Blogs("./footage/faja.jpeg","Fajas maternales","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","07/27/2022")
const blog2 = new Blogs("./footage/porteo.png","Beneficios del porteo","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","03/09/2022")  
const blog3 = new Blogs("./footage/vestios.jpg","Vestidos de Lactancia","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","08/20/2022")

const sectionProductos = [prod1,prod2,prod3,prod4,prod5,prod6]
const sectionBlog = [blog1,blog2,blog3]

const productos = document.getElementById("productos")
const blogs = document.getElementById("blogs")

Productos(sectionProductos,productos);
Blogs(sectionBlog,blogs)

const carro = document.getElementById("carro")
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

botonCompra()




    


