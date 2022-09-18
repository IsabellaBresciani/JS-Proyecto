// creo e inicializo las variables
let button
let i=0
let buttonEliminar
let botones = []
let compra = []



//creo la key carrito en el local si no existe, si existe obtengo su valor

if (localStorage.getItem("Carrito")){
    compra = JSON.parse(localStorage.getItem("Carrito"))
}else{
    localStorage.setItem("Carrito",JSON.stringify(compra))
}


//Obtengo el div donde voy a insertar los productos
const divProductos = document.getElementById("productos")
const divBlogs = document.getElementById("blogs")
const compras = document.getElementById("compras")
const comprasCarrito=document.getElementById("comprasCarrito")
console.log("aca"+comprasCarrito)
console.log("aca"+divProductos)
console.log("aca"+compras)
console.log("aca"+divBlogs)

//traigo los productos y blogs del JSON
const traerProductos = async () => {
    let response = await fetch("../json/productos.json");
    const prods = await response.json();
    return prods
}

const traerBlogs = async () => {
    let  response = await fetch("../json/blogs.json");
    const blogs = await response.json();
    return blogs
    
}


//Los mustro en el front 
traerBlogs().then(blogs =>{
    blogs.forEach((blog) => {
        
        divBlogs.innerHTML += `
        <article class="blog">
            <img src=${blog.imagen}>
            <h4>${blog.titulo}</h4>
            <p>${blog.detalle}</p>
            <p>${blog.fecha}</p>
        </article>
        `
    })
})

let sectionProductos = []
traerProductos().then(productos =>{
    sectionProductos = productos
    productos.forEach((prod) => {
        divProductos.innerHTML += `
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <button class="buttonCarrito" id="carrito${prod.id}">agregar al carrito</button>
        </article>`})
    
    const producto = document.getElementsByClassName("blog")
    const mainTienda = document.getElementById("mainTienda")
    /*
    producto.forEach(prod =>{
        prod.addEventListener("click",()=>{
            mainTienda.innerHTML+=`
                <article class="productoDetail">
                        <img src=${prod.imagen}>
                        <div class="productoDetail-text"> 
                            <h2>${prod.titulo}</h2>
                            <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
                            <p>${prod.precio}</p>
                            <input id="inputCantidad" type="number"> Cantidad de productos </input>
                        </div>
                </article>
            `
            let number = document.getElementById("inputCantidad")
        })
    })
    */
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
    
    
})

//Logica para que un producto se elimine del carrito
const Carrito =JSON.parse(localStorage.getItem("Carrito")).length


if (Carrito==0){
    //me fijo si el carrito esta vacio, si esto es true luego imprimo ese mensaje 
    comprasCarrito.innerHTML = `
    <h5> Usted aun no a incorporado ningun producto a su carrito</h5>`
}else{
    //Si en el carrito hay compras luego las guardo en la variable combras
    let botons = []
    compra=JSON.parse(localStorage.getItem("Carrito"))
    
    //muestro las compras en el front
    compra.forEach(prod => {
        i=i+1
        comprasCarrito.innerHTML+=`
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <input type="button" value="Eliminar del carro" class="buttonCarrito" id="tienda${i}" onclick="location.reload()"/>
        </article>
        `
    });
    //obtengo los botones de las compras y los guardo en el arreglo botones
    if (compra.length==1){
        button = document.getElementById(`tienda${i}`)
        botons.push(button)
    }else{
        for (i=1;i<=compra.length;i++){
            button = document.getElementById(`tienda${i}`)
            botons.push(button)
        }
    }
    // para cada boton en botones, agrego un addEvent listener que ante un click elimina a ese producto del arreglo
    botons.forEach((button)=> (
        button.addEventListener("click",()=>{
            compra.splice([botons.indexOf(button)],1)
            localStorage.setItem("Carrito",JSON.stringify(compra))
        })
    ))
}


