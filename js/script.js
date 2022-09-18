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
const producto = document.getElementsByClassName("blog")
const ventanas = document.getElementById("ventanas")

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
        <article class="prod">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>$${prod.precio}</p>    
        </article>`})
    
})

.then(()=>{
    const cards = Array.from(document.getElementsByClassName("prod"))
    cards.forEach((card) =>{
        card.addEventListener("click",()=>{
            ventanas.innerHTML=`
                <article class="productoDetail">
                        <img src="${card.children[0].getAttribute("src")}">
                        <div class="productoDetail-text"> 
                            <h4>${card.children[1].innerHTML}</h4>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "</p>
                            <p>$${card.children[2].innerHTML}</p>
                            <label>Ingrese cantidad </label>
                            <input class="inputText" type="number">
                            <button class="buttonCarrito" id="carrito${cards.indexOf(card)}">agregar al carrito</button>
                        </div>
                        <button class="close">X</button>
                </article>
            `
            let close = document.getElementsByClassName("close")
            let detail = document.getElementsByClassName("productoDetail-text")[0]
            Array.from(close).forEach((button)=>{
            let productosDetailt = document.getElementsByClassName("productoDetail")
            button.addEventListener("click",()=>{
                productosDetailt[0].classList.add("remove")
            })
            let agregarCarrito = document.getElementById(`carrito${cards.indexOf(card)}`)
            let input = document.getElementsByClassName("inputText")[0]
            input.addEventListener("input",()=>{
                let number = input.value
                sectionProductos[cards.indexOf(card)].cantidad=number
                agregarCarrito.innerHTML = ` Agregar al carrito ${number} unidades`
            })
            
            agregarCarrito.addEventListener("click",()=>{
            compra.push(sectionProductos[cards.indexOf(card)])
            localStorage.setItem("Carrito",JSON.stringify(compra))
            Swal.fire(
                'Añadiste este producto al carrito de compras!',
                'Felicidades!',
                'success'
            )
        })
        })
        })

        

        
    })
})

//Logica para que un producto se elimine del carrito
const Carrito =JSON.parse(localStorage.getItem("Carrito")).length


if (Carrito==0){
    //me fijo si el carrito esta vacio, si esto es true luego imprimo ese mensaje 
    comprasCarrito.innerHTML = `
    <h2> Usted aun no a incorporado ningun producto a su carrito</h2>`
}else{
    //Si en el carrito hay compras luego las guardo en la variable combras
    let botons = []
    compra=JSON.parse(localStorage.getItem("Carrito"))
    let detalleCompra = document.getElementById("detalleCompraLista")
    let monto = 0
    //muestro las compras en el front
    compra.forEach(prod => {
        i=i+1
        comprasCarrito.innerHTML+=`
        <article class="prod">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>$${prod.precio}</p>
            <p> Cantidad de productos = ${prod.cantidad}</p>
            <input type="button" value="Eliminar del carro" class="buttonCarrito" id="tienda${i}" onclick="location.reload()"/>
        </article>
        `
        monto = monto + parseInt(prod.precio)*parseInt(prod.cantidad)
        detalleCompra.innerHTML+=`
        <li>Articulo: ${prod.titulo}, Precio: $${prod.precio}, Cantidad: ${prod.cantidad}</ul>`
         
    });
    detalleCompra.innerHTML+=`<p> el monto total es <b>${monto}</b>`
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


