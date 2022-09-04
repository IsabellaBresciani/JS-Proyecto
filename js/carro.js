let compra = []
const compras = document.getElementById("compras")
const Carrito =JSON.parse(localStorage.getItem("Carrito")).length
let i=0
let button

if (Carrito==0){
    compras.innerHTML = `
    <h5> Usted aun no a incorporado ningun producto a su carrito</h5>`
}else{
    let botones = []
    compra=JSON.parse(localStorage.getItem("Carrito"))
    compra.forEach(prod => {
        i=i+1
        compras.innerHTML+=`
        <article class="blog">
            <img src=${prod.imagen}>
            <h4>${prod.titulo}</h4>
            <p>${prod.precio}</p>
            <input type="button" value="Eliminar del carro" class="buttonCarrito" id="tienda${i}" onclick="location.reload()"/>
        </article>
        `
    });
    if (compra.length==1){
        button = document.getElementById(`tienda${i}`)
        botones.push(button)
    }else{
        for (i=1;i<=compra.length;i++){
            button = document.getElementById(`tienda${i}`)
            botones.push(button)
        }
    }
    botones.forEach((button)=> (
        button.addEventListener("click",()=>{
            compra.splice([botones.indexOf(button)],1)
            localStorage.setItem("Carrito",JSON.stringify(compra))
        })
    ))
}

