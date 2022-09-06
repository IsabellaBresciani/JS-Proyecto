let carrito = []
const compras = document.getElementById("compras")
const Carrito =JSON.parse(localStorage.getItem("Carrito")).length
let i=0
let button

if (Carrito==0){
    compras.innerHTML = `
    <h5> Usted aun no a incorporado ningun producto a su carrito</h5>`
}else{
    let botones = []
    carrito=JSON.parse(localStorage.getItem("Carrito"))
    Compra(carrito)
    if (carrito.length==1){
        button = document.getElementById(`tienda${i}`)
        botones.push(button)
    }else{
        for (i=1;i<=carrito.length;i++){
            button = document.getElementById(`tienda${i}`)
            botones.push(button)
        }
    }
    botones.forEach((button)=> (
        button.addEventListener("click",()=>{
            carrito.splice([botones.indexOf(button)],1)
            localStorage.setItem("Carrito",JSON.stringify(carrito))
        })
    ))
}

