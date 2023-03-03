window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
  document
    .getElementById("nombre")
    .addEventListener("blur", ponerEnMayusculas, false);
  document
    .getElementById("apellido1")
    .addEventListener("blur", ponerEnMayusculas, false);
  document
    .getElementById("apellido2")
    .addEventListener("blur", ponerEnMayusculas, false);
}
function ponerEnMayusculas() {
  document.getElementById("nombre").value = document
    .getElementById("nombre")
    .value.toUpperCase();
  document.getElementById("apellido1").value = document
    .getElementById("apellido1")
    .value.toUpperCase();
  document.getElementById("apellido2").value = document
    .getElementById("apellido2")
    .value.toUpperCase();
}

const validarFecha = () => {
  let fecha = document.getElementById("fecha").value;
  let expresion = /\d{2}-\d{2}-\d{4}/;
  let mayor = 2022 - parseInt(fecha.substr(6)) >= 16;
  console.log(mayor);
  console.log(2022 - parseInt(fecha.substr(6)));
  if ((expresion.test(fecha) && mayor)||(fecha=="")) {
    return true;
  } else {
    document.getElementById("errores").innerHTML = "error en fecha";
    return false;
  }
};
const validarDni = () => {
  let dni = document.getElementById("dni").value;
  let expresion = /\d{8}[A-Za-z]/;
  if (expresion.test(dni) || dni == "") {
    return true;
  } else {
    document.getElementById("errores").innerHTML = "Error en DNi";
    return false;
  }
};
const validarEmail = () => {
  let email = document.getElementById("email").value;
  let expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if ((expresion.test(email))||(email=="")) {
    return true;
  } else {
    document.getElementById("errores").innerHTML = "Error en email";
    return false;
  }
};
const validarPassword = () => {
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;
  if (expresion.test(password1)) {
    if (expresion.test(password2)) {
      if (password1 === password2) {
        return true;
      } else {
        document.getElementById("errores").innerHTML =
          "Contraseñas no coinciden";
        return false;
      }
    } else {
      document.getElementById("errores").innerHTML = "contraseña erronea";
      document.getElementById("password2").focus();
    }
  } else {
    document.getElementById("errores").innerHTML = "contraseña erronea";
    document.getElementById("password1").focus();
  }
};
const camposVacios = () => {
  let nombre = document.getElementById("nombre").value;
  let apellido1 = document.getElementById("apellido1").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let valido = false;
  if (nombre == "") {
    nombre = "nombre vacio; ";
  } else {
    nombre = "";
  }
  if (apellido1 == "") {
    apellido1 = "apellidos vacio;";
  } else {
    apellido1 = "";
  }
  if (email == "") {
    email = "email vacio; ";
  } else {
    email = "";
  }
  if (password1 == "") {
    password1 = "password1 vacio; ";
  } else {
    password1 = "";
  }
  if (password2 == "") {
    password2 = "password2 vacio";
  } else {
    password2 = "";
  }
  let texto = nombre + apellido1 + email + password1 + password2;
  if ((texto !="")) {
    document.getElementById("errores").innerHTML=texto;
    return false;
  } else {
    return true;
  }
  
};
const validar = (e) => {
  if (camposVacios()&&validarFecha()&&validarDni()&&validarEmail()&&validarPassword()) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
};
