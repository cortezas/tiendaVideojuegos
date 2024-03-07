function iniciarSesion() {
    // Asegúrate de que estás obteniendo los valores de los campos de usuario y contraseña correctamente
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var usuario = {
        username: "raul",
        password: "@Aberroncho1999"
    };

    // Verifica si los valores de username y password coinciden con los del usuario almacenado
    if (usuario && username === usuario.username && password === usuario.password) {
        // Si la autenticación es exitosa, almacena el usuario en el almacenamiento local
        localStorage.setItem("usuario", JSON.stringify(usuario));
        Swal.fire({
            title: 'Inicio de sesión exitoso',
            text: 'Redirigiendo a cliente',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir a cliente
                window.location.href = "cliente.html";
            }
        });

    } else {
        // Si la autenticación falla, muestra un mensaje de error
        Swal.fire({
            title: 'Error',
            text: 'Tienes que introducir los datos correctos',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}


// Sujeto a cambios
function redireccionarNav(seccionId) {
    // Redirigir a la página secciones copy.html con el identificador de la sección como parámetro de consulta
    window.location.href = "secciones.html?seccion=" + seccionId;
}

function redireccionarLogin() {
    window.location.href = "login.html";
}

function redireccionarCesta() {
    window.location.href = "cesta.html";
}

function redireccionarInicio() {
    window.location.href = "index.html";
}