document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-usuarios");
    const contenedorMensajes = document.getElementById("contenedor-mensajes");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Previene el recargo de la página
            evento.preventDefault();

            // Limpia mensajes anteriores
            contenedorMensajes.innerHTML = "";

            // Obtención de valores
            const cedula = document.getElementById("identificacion").value.trim();
            const nombres = document.getElementById("nombres").value.trim();
            const correo = document.getElementById("correo").value.trim();

            // Creación dinámica del elemento de mensaje (Modificación del DOM)
            const alerta = document.createElement("div");

            // Validación de campos vacíos
            if (cedula === "" || nombres === "" || correo === "") {
                alerta.className = "mensaje-error";
                alerta.textContent = "Error: Por favor, complete la cédula, nombres y correo.";
                // Accesibilidad: indicar error al lector de pantalla
                document.getElementById("identificacion").setAttribute("aria-invalid", "true");
            } else {
                alerta.className = "mensaje-exito";
                alerta.textContent = `¡Éxito! El usuario ${nombres} ha sido registrado localmente.`;
                formulario.reset();
                document.getElementById("identificacion").removeAttribute("aria-invalid");
            }

            // Inyectar el mensaje en el HTML
            contenedorMensajes.appendChild(alerta);
        });
    }
});