const claveModo = 'modo';
const botonModos = document.querySelector('#boton-modos');
const body = document.body;

function aplicarModo(esClaro) {
    if (esClaro) {
        body.classList.add('modo-claro');
        botonModos.textContent = 'Modo Oscuro';
    } else {
        body.classList.remove('modo-claro');
        botonModos.textContent = 'Modo Claro';
    }
}

if (localStorage.getItem(claveModo) === 'claro') {
    aplicarModo(true);
}

botonModos.addEventListener('click',() => {
    if (body.classList.contains('modo-claro')) {
        localStorage.setItem(claveModo, 'oscuro');
        aplicarModo(false);
    } else {
        localStorage.setItem(claveModo, 'claro');
        aplicarModo(true);
    }
});
