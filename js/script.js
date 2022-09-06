
function Blogs(vecBlog,blogs)  {
    vecBlog.forEach((blog) => {
        blogs.innerHTML += `
        <article class="blog">
            <img src=${blog.imagen}>
            <h4>${blog.titulo}</h4>
            <p>${blog.detalle}</p>
            <p>${blog.fecha}</p>
        </article>
        `
    }) 
}


function Productos(vecProducto,productos){
    vecProducto.forEach((prod) => {
        productos.innerHTML += `
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <button class="buttonCarrito" id="carrito${prod.id}">agregar al carrito</button>
        </article>
        `
    })
}
    

function Compra(vecCompra){
    vecCompra.forEach((prod)=> {
        i=i+1
        compras.innerHTML+=`
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <input type="button" value="Eliminar del carro" class="buttonCarrito" id="tienda${i}" onclick="location.reload()"/>
        </article>
        `
    })
}


function botonCompra(){
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

}