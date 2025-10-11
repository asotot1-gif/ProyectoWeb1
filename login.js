// Capturamos el formulario
const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");
const container = document.querySelector(".login-container");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita recarga del formulario

  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "cenfo" && clave === "123") {
    // ✅ Login correcto
    mensaje.textContent = "✅ Bienvenido, redirigiendo...";
    mensaje.style.color = "green";

    // Micro interacción: espera 1.5 segundos y redirige
    setTimeout(() => {
      window.location.href = "landing.html";
    }, 1500);

  } else {
    // ❌ Login incorrecto
    mensaje.textContent = "❌ Usuario o clave incorrectos";
    mensaje.style.color = "red";

    // Micro interacción: animación shake
    container.classList.add("shake");
    setTimeout(() => {
      container.classList.remove("shake");
    }, 500);
  }
});
