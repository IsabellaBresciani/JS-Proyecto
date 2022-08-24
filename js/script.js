class Blogs{
    constructor(imagen,titulo,detalle,fecha){
        this.imagen=imagen
        this.titulo=titulo
        this.detalle=detalle
        this.fecha=fecha
    }
}

const blog1 = new Blogs("./footage/faja.jpeg","Fajas maternales","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","07/27/2022")
const blog2 = new Blogs("./footage/porteo.png","Beneficios del porteo","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","03/09/2022")  
const blog3 = new Blogs("./footage/vestios.jpg","Vestidos de Lactancia","¿Son necesarias las fajas maternales de Pre y Pos parto? Muchas embarazadas desconocen la existencia de las fajas, siendo estas indispensables para la futura mama[...]","08/20/2022")


const sectionBlog = [blog1,blog2,blog3]
const blogs = document.getElementById("blogs")


sectionBlog.forEach((blog) => {
    blogs.innerHTML += `
    <article class="blog">
        <img src=${blog.imagen}>
        <h4>${blog.titulo}</h4>
        <p>${blog.detalle}</p>
        <p>${blog.fecha}</p>
    </article>
    `
})

const button = document.getElementsByClassName("ref")

button.addEventListener("mousemove", changeButton)


function changeButton (){
        button.className = "refbg"
}


