'use strict'

const rigth = document.querySelector(".rigth");
const lenguajes = document.querySelector("#lenguajes");

console.log(rigth.children[2].children)

const showLenguaje = () => {
    
    const header = rigth.firstElementChild;
    const title = header.firstElementChild;
    const speech = rigth.children[1];
    const buttons = rigth.children[2];
    const btn1 = buttons.children[0];
    const btn2 = buttons.children[1];
    const btn3 = buttons.children[2];


    if(lenguajes.value === "Ingles"){
        title.textContent = "Manage the login of your account"
        speech.textContent = "You can easily manage the methods you use to securely log in to your Unilever Account or reset your Unilever password, on any device, anytime, anywhere."
        btn1.textContent = "Reset / Unlock account";
        btn2.textContent = "Change account password"
        btn3.textContent = "Register or Update MFA media"
    }

    if(lenguajes.value === "Español"){
        title.textContent = "Administra el inicio de sesión de tu cuenta"
        speech.textContent = "Se puede administrar fácilmente los métodos que utilizas para iniciar sesión de forma segura en tu Cuenta de Unilever o restablecer tu contraseña de Unilever, en cualquier dispositivo,en cualquier momento, en cualquier lugar."
        btn1.textContent = "Restablecer / Desbloquear cuenta"
        btn2.textContent = "Cambiar contraseña de cuenta"
        btn3.textContent = "Registrar o Actualizar medios de MFA"
    }    

}



