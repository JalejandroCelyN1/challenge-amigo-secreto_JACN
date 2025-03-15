document.addEventListener('DOMContentLoaded', () => {
    const inputNombre = document.getElementById('amigo');
    const botonAdicionar = document.querySelector('.button-add');
    const listaNombres = document.getElementById('listaAmigos');
    const botonSortear = document.querySelector('.button-draw');
    const resultado = document.getElementById('resultado');
    let nombres = [];

    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (nombre === '') {
            alert('Por favor, ingresa un nombre válido.');
            return;
        }
        nombres.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
        inputNombre.value = '';
    }

    function sortearAmigo() {
        if (nombres.length === 0) {
            alert('No hay nombres en la lista para sortear.');
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSorteado = nombres[indiceAleatorio];
        resultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
    }

    botonAdicionar.addEventListener('click', agregarAmigo);
    botonSortear.addEventListener('click', sortearAmigo);
});