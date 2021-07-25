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
                <p class="titulo" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
                ${nota.titulo}</p>
                </a>
                </p>
                <div class="collapse" id="collapseExample${i}">
                    <div class="card card-body">
                    <div class="container">
                         <div class="row">
                            <div class="col-2 m-5 p-5 categoria">
                                <p>${nota.categoria}</p>
                            </div>
                            <div class="col-5 contenido m-5">
                            <p class="">${nota.contenido}</p>
                            </div>
                            <div class="col-1 m-5">
                             <div class="">
                            <button type="button" class="btn btn-primary boton_editar mt-3 text-center d-flex">Editar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square m-1" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg></button>
                            <button type="button" id="boton_eliminar" class="btn btn-danger mt-3 text-center d-flex">Eliminar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash m-1" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg></button>
                        </div>
                    </div>
                </div>
            </div>
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

const eliminarNota = document.getElementById("boton_eliminar");
eliminarNota.addEventListener('click', eliminar)
function eliminar() {
    alert("Desea eliminar nota?");

}









