document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // evita que la página se recargue al enviar el formulario

  let usuario = document.getElementById("usuario").value;
  let clave = document.getElementById("clave").value;
  let mensaje = document.getElementById("mensaje");

  if (usuario === "cenfo" && clave === "123") {
    // ✅ Login correcto
    mensaje.textContent = "Bienvenido al sitio web, redirigiendo...";
    mensaje.style.color = "green";

    // micro interacción: espera 1.5 segundos y redirige a landing.html
    setTimeout(() => {
      window.location.href = "landing.html";
    }, 1500);

  } else {
    // Login incorrecto
    mensaje.textContent = "Usuario o clave incorrectos";
    mensaje.style.color = "red";

    // micro interacción: animación de "shake" (temblor)
    document.querySelector(".login-container").classList.add("shake");
    setTimeout(() => {
      document.querySelector(".login-container").classList.remove("shake");
    }, 500);
  }
});
