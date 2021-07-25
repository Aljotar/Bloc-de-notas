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
            <div class="col-12">
                <p>
                <p data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
                ${nota.titulo}</p>
                </a>
                </p>
                <div class="collapse" id="collapseExample${i}">
                    <div class="card card-body bg-dark">
                        <p>${nota.categoria}</p>
                        <p class="">${nota.contenido}</p>
                        </div>
                        <div class="card-body bg-dark">
                            <button type="button" class="btn btn-success mt-3">Editar</button>
                            <button type="button" class="btn btn-danger mt-3">Eliminar</button>
                        </div>
                    </div>
            </div>
   
        `;
            contenido.push(div);
        }
        contenedor.innerHTML = contenido.join("");
    }
    mostrar();
}

console.log(notas[2]["contenido"].length);






