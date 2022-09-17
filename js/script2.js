let button
const botones = []
let compra = []
//creo la key carrito en el local si no existe, si existe obtengo su valor

if (localStorage.getItem("Carrito")){
    compra = JSON.parse(localStorage.getItem("Carrito"))
}else{
    localStorage.setItem("Carrito",JSON.stringify(compra))
}


//Obtengo el div donde voy a insertar los productos
const divProductos = document.getElementById("productos")

//traigo los productos del JSON
const traerProductos = async () => {
    const response = await fetch("../json/productos.json");
    const prods = await response.json();
    return prods
}

//Los mustro en el front y los guardo en otro array
let sectionProductos = []
traerProductos().then(productos =>{
    sectionProductos = productos
    console.log(sectionProductos)
    console.log(sectionProductos.length)
    productos.forEach((prod) => {
        divProductos.innerHTML += `
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <button class="buttonCarrito" id="carrito${prod.id}">agregar al carrito</button>
        </article>`})
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





    


