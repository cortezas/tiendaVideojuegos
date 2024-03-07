document.addEventListener("DOMContentLoaded", function () {
    var usuario = localStorage.getItem("usuario");
    var avatarBtn = document.getElementById("avatar");

    if (usuario) {
        avatarBtn.addEventListener("click", function () {
            window.location.href = "cliente.html";
        });
    } else {
        // Si no hay usuario, redirigir a la página de inicio de sesión
        avatarBtn.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
});