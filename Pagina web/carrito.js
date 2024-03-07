// Array para almacenar los juegos en el carrito
let carrito = [];

// Al cargar la página, recuperar el carrito del localStorage si existe
document.addEventListener("DOMContentLoaded", function () {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
});

// Función para agregar un juego al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
// Función para manejar el clic en el botón "Añadir al carrito"
function manejarAñadirAlCarrito(event) {
    const boton = event.target;
    const contenedor = boton.closest('.image-container2');
    let nombre;
    let precio;

    if (contenedor) {
        // Es un producto de merchandising
        const nombreElemento = contenedor.querySelector("h1, h3");
        const precioElemento = contenedor.querySelector("#precio b");

        nombre = nombreElemento ? nombreElemento.innerText.trim() : "Nombre no disponible";
        precio = precioElemento ? parseFloat(precioElemento.innerText.replace("Precio: ", "").replace("€", "")) : 0;
    } else {
        nombre = this.parentNode.querySelector("h1").innerText;
        precio = parseFloat(this.parentNode.querySelector("#precio").innerText.replace("Precio: ", "").replace("€", ""));
    }

    // Llamar a la función para manejar la acción de añadir al carrito
    agregarAlCarrito(nombre, precio);
    // Mostrar un mensaje de confirmación al usuario
    Swal.fire({
        title: 'Producto añadido al carrito',
        text: 'El producto se ha añadido al carrito.',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
}


// Obtener todos los botones "Añadir al carrito"
const botonesAñadir = document.querySelectorAll("button");

// Iterar sobre los botones y agregar un listener para el evento clic
botonesAñadir.forEach(boton => {
    boton.addEventListener("click", manejarAñadirAlCarrito);
});