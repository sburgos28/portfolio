const claveModo = "modo";
const botonModos = document.querySelector("#boton-modos");
const body = document.body;

function aplicarModo(esClaro) {
  if (esClaro) {
    body.classList.add("modo-claro");
    botonModos.textContent = "Modo Oscuro";
  } else {
    body.classList.remove("modo-claro");
    botonModos.textContent = "Modo Claro";
  }
}

function leerModo() {
  try {
    return localStorage.getItem(claveModo);
  } catch {
    return null;
  }
}

function guardarModo(modo) {
  try {
    localStorage.setItem(claveModo, modo);
  } catch {
    // Sin persistencia, el cambio de tema sigue funcionando en la sesión.
  }
}

if (leerModo() === "claro") {
  aplicarModo(true);
}

botonModos.addEventListener("click", () => {
  const esClaro = !body.classList.contains("modo-claro");
  aplicarModo(esClaro);
  guardarModo(esClaro ? "claro" : "oscuro");
});
