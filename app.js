const button = document.getElementById("btn");
const notas = (JSON.parse(localStorage.getItem("notas")) || []);
const form = document.getElementById("form");
let contenido = [];
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
    nuevaNota.id = ID();
    notas.push(nuevaNota);
    localStorage.setItem("notas", JSON.stringify(notas));
    form.reset();
}
const cancelar = document.getElementById("btn-cancelar");
cancelar.addEventListener('click', resetModal);
function resetModal() {
    form.reset();
}
document.addEventListener("DOMContentLoaded", mostrarNotas)
function mostrarNotas() {
    let contenedor = document.querySelector(".contenedor")
    function mostrar() {
        for (let i = 0; i < notas.length; i++) {
            const nota = notas[i];
            const div = `
            <div class="col-6">
            <p>${nota.id}
            <p>${nota.titulo}
            <p>${nota.contenido}
            </div>
            <div class="col-6">
            <button type="button" class="btn btn-success">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </div>
        `;
            contenido.push(div);
        }
        contenedor.innerHTML = contenido.join("");

    }
    mostrar();
}





