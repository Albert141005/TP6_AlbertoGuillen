// Simulación de backend para login
const correctUsername = "user";
const correctPassword = "password";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    if (username === correctUsername && password === correctPassword) {
        message.innerText = "Ingreso correcto";
        console.log(`Se ha ingresado: ${username}`);
        setTimeout(() => { window.location.href = 'pagina2.html'; }, 2000);
    } else {
        message.innerText = "Contraseña incorrecta";
    }
});

// Bienvenida en la página principal
document.getElementById("welcomeButton").addEventListener("click", function() {
    const userNameInput = document.getElementById("userNameInput").value;
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerText = `Bienvenido, ${userNameInput}`;
});

// Envío de formularios
window.addEventListener("DOMContentLoaded", function() {
    const personalDataForm = document.getElementById("personalDataForm");
    const formMessage = document.getElementById("formMessage");
    
    if (personalDataForm) {
        personalDataForm.addEventListener("submit", function(event) {
            event.preventDefault();
            formMessage.innerText = "Datos enviados con éxito!";
            console.log("Datos personales enviados");
            personalDataForm.reset(); // Limpia el formulario tras el envío
        });
    }
});

// Envío de mensajes
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const messageResponse = document.getElementById("messageResponse");
    messageResponse.innerText = "Mensaje enviado!";
    console.log("Mensaje enviado");
});







