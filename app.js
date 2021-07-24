const button = document.getElementById("btn");
button.addEventListener('click', tomarDatos);
function tomarDatos() {
    const titulo = document.getElementById("boton_titulo");
    const contenido = document.getElementById("exampleFormControlTextarea1");
    const categoria = document.getElementById("categoria");
    const nuevaNota = {
        id: "id",
        titulo: titulo.value,
        contenido: contenido.value,
        categoria: categoria.value
    }
    
    let ID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    nuevaNota["id"] = ID
    
    console.log(nuevaNota);


}

