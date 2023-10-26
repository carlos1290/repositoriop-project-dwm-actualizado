window.addEventListener("resize", anchopagina);
document.getElementById("Btn_register").addEventListener("click", register);
document.getElementById("Btn_inicio-sesion").addEventListener("click", login);

// Declaración de variables
var contenedorformularios = document.querySelector(".contenedor__login-register");
var cajadeatrasregister = document.querySelector(".caja_de_atras_register");
var cajadeatraslogin = document.querySelector(".caja_de_atras_login");
var formularioregister = document.querySelector(".formulario_register");
var formulariologin = document.querySelector(".formulario_login");
var contenedormenu = document.querySelector("menu-container");  
function tocarsubmenu () {
    var sublista = document.querySelector(".sub-lista");
    if (sublista.style.display === "block") {
        sublista.style.display = "none"; // Ocultar la sublista
    } else {
        sublista.style.display = "block"; // Mostrar la sublista
    }

}

function anchopagina() {
    if (window.innerWidth > 850) {
        cajadeatraslogin.style.display = "block";
        cajadeatrasregister.style.display = "block";
    } else {
        cajadeatrasregister.style.display = "block";
        cajadeatrasregister.style.opacity = "1";
        cajadeatraslogin.style.display = "none";
        formulariologin.style.display = "block";
        formularioregister.style.display = "none";
        contenedorformularios.style.left = "0px";
    }
}
   anchopagina();
   
function register() {
    if (window.innerWidth > 850) {
        formularioregister.style.display = "block";
        contenedorformularios.style.left = "410px";
        formulariologin.style.display = "none";
        cajadeatrasregister.style.opacity = "0";
        cajadeatraslogin.style.opacity = "1";
    } else {
        formularioregister.style.display = "block";
        contenedorformularios.style.left = "0px";
        formulariologin.style.display = "none";
        cajadeatrasregister.style.display = "none";
        cajadeatraslogin.style.display = "block";
        cajadeatraslogin.style.opacity = "1";
    }
}

function login() {
    if (window.innerWidth > 850) {
        formularioregister.style.display = "none";
        contenedorformularios.style.left = "10px";
        formulariologin.style.display = "block";
        cajadeatrasregister.style.opacity = "1";
        cajadeatraslogin.style.opacity = "0";
    } else {
        formularioregister.style.display = "none";
        contenedorformularios.style.left = "0px";
        formulariologin.style.display = "block";
        cajadeatrasregister.style.display = "block";
        cajadeatraslogin.style.display = "none";
    }
}
