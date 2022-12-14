"use strict";

const rigth = document.querySelector(".rigth");
const lenguajes = document.querySelector("#lenguajes");

const showLenguaje = () => {
  const header = rigth.firstElementChild;
  const title = header.firstElementChild;
  const speech = rigth.children[1];
  const secondaryText = rigth.children[2];
  const buttons = rigth.children[3];
  const btn1 = buttons.children[0];
  const btn2 = buttons.children[1];
  const btn3 = buttons.children[2];
  const contactText = rigth.children[4];

  if (lenguajes.value === "Ingles") {
    title.textContent = "Self-Service Password Reset";
    speech.textContent =
      "Easily and securely reset, change and manage the methods you use to log in to your Alimentos Prosalud account.";
    secondaryText.textContent = "Select the option you wish to perform:";
    btn1.textContent = "Reset / Unlock account";
    btn2.textContent = "Change account password";
    btn3.textContent = "Register or Update MFA media";
    contactText.innerHTML = `
        <div>
          <p>
            If you require support, please contact
            <a
              class="mail"
              href="mailto:soporte@prosalud.com"
              target="_blank"
              rel="noopener noreferrer"
              >soporte@prosalud.com</a
            >
          </p><br>
          <p class="footer">IT Department - Alimentos Prosalud</p>
        </div>`;
  }

  if (lenguajes.value === "Español") {
    title.textContent = "Autoservicio Restablecimiento de Contraseña ";
    speech.textContent =
      "Restablezca, cambie y administre de forma fácil y segura los métodos que utiliza para iniciar sesión en tu cuenta de Alimentos Prosalud.";
    secondaryText.textContent = "Seleccione la opción que requiere realizar:";
    btn1.textContent = "Restablecer / Desbloquear cuenta";
    btn2.textContent = "Cambiar contraseña de cuenta";
    btn3.textContent = "Registrar o Actualizar medios de MFA";
    contactText.innerHTML = `<div>
          <p>
            Si requiere soporte comuníquese a
            <a
              class="mail"
              href="mailto:soporte@prosalud.com"
              target="_blank"
              rel="noopener noreferrer"
              >soporte@prosalud.com</a
            >
          </p><br>
          <p class="footer">Departamento de Tecnología Alimentos Prosalud</p>
        </div>`;
  }
};
