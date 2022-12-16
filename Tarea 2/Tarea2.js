//Funcion de la tabla de multiplicar del 8 con bucle "for"
  function mostrarTabla(){
  
  const numero = 8;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (for) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  for (let i = 0; i <= 10; i++) {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de multiplicar del 7 con bucle "for"
const mostrarTabla1 = () => {
  this.event.preventDefault();
  const numero = 7;

  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (for) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  for (let i = 0; i <= 10; i++) {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
  }
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de dividir del 9 con bucle "for"
const mostrarTabla2 = (e) => {
  e.preventDefault();
  const numero = 9;
  let tabla = document.getElementById("tabla");
  let tablaDividir = `<h1>Tabla de dividir (for) del número ${numero}</h1>`;
  tablaDividir += "<ul>";
  for (let i = 10; i > 0; i--) {
    tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
  }
  tablaDividir += "</ul>";
  tablaDividir += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaDividir;
};

//Funcion de la tabla de multiplicar del 8 con bucle "while"
const mostrarTabla3 = (e) => {
  e.preventDefault();
  const numero = 8;
  let i = 1;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (while) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  while (i <= 10) {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
    i++;
  }
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de multiplicar del 7 con bucle "while"
const mostrarTabla4 = (e) => {
  e.preventDefault();
  const numero = 7;
  let i = 1;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (while) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  while (i <= 10) {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
    i++;
  }
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de dividir del 9 con bucle "while"
const mostrarTabla5 = () => {
  this.event.preventDefault();
  const numero = 9;
  let i = 10;
  let tabla = document.getElementById("tabla");
  let tablaDividir = `<h1>Tabla de dividir (while) del número ${numero}</h1>`;
  tablaDividir += "<ul>";
  while (i > 0) {
    tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
    i--;
  }
  tablaDividir += "</ul>";
  tablaDividir += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaDividir;
};

//Funcion de la tabla de multiplicar del 8 con bucle "do-while"
const mostrarTabla6 = () => {
  this.event.preventDefault();
  const numero = 8;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (do-while) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  let i = 1;
  do {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
    i++;
  } while (i <= 10);
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de multiplicar del 7 con bucle "do-while"
const mostrarTabla7 = () => {
  this.event.preventDefault();
  const numero = 7;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h1>Tabla de multiplicar (do-while) del número ${numero}</h1>`;
  tablaMultiplicar += "<ul>";
  let i = 1;
  do {
    tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
    i++;
  } while (i <= 10);
  tablaMultiplicar += "</ul>";
  tablaMultiplicar += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaMultiplicar;
};

//Funcion de la tabla de dividirdel 9 con "do-while"
const mostrarTabla8 = () => {
  this.event.preventDefault();
  const numero = 9;
  let tabla = document.getElementById("tabla");
  let tablaDividir = `<h1>Tabla de dividir (do-while) del número ${numero}</h1>`;
  tablaDividir += "<ul>";
  let i = 10;
  do {
    tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
    i--;
  } while (i > 0);
  tablaDividir += "</ul>";
  tablaDividir += `<input type="button" value="Vaciar" onclick="vaciar()">`;
  tabla.innerHTML = tablaDividir;
};

//Esta funcion la utilizo para borrar la tabla
function vaciar() {
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
}
