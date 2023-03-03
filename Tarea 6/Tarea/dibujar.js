window.onload = comienzo;

//Estas dos variables las inicializo al principio. Son para que en pincel este desactivado y
//el color a pintar por defecto sea el de la primera casilla (amarillo) que viene como
//preseleccionado.

let pincelActivado = false;
var colorElegido = "color1";

//Cuando el html este cargado se iniciara ésta función.

function comienzo() {
  estadoPincel(pincelActivado);
  //Selecciono el parrafo donde debe ir el mensaje y lo incluyo.

  let mensajeClick = document.getElementsByTagName("p").item(1);
  mensajeClick.innerHTML =
    "Haga CLICK en cualquier celda para activar/desactivar el pincel";

  //creamos la tabla que vamos a poner en el area de dibujo que va a servir de lienzo.

  //Creamos un elemento table y le aplicamos un id y unos estilos
  let tablaDibujo = document.createElement("table");
  tablaDibujo.setAttribute("id", "tabla");
  tablaDibujo.style.border = "1px";
  tablaDibujo.style.border = "solid";
  tablaDibujo.style.borderColor = "grey";

  //Creamos los table-row de la tabla y los td del lienzo que vamos a usar como
  //area de dibujo
  for (i = 1; i <= 30; i++) {
    let filaTabla = document.createElement("tr");
    for (j = 1; j <= 30; j++) {
      let columnaTabla = document.createElement("td");
      columnaTabla.setAttribute("id", "fila" + i + "col" + j);
      columnaTabla.style.width = "10px";
      columnaTabla.style.height = "10px";
      columnaTabla.style.padding = "0px";
      columnaTabla.style.margin = "0px";
      columnaTabla.style.border = "1px";
      columnaTabla.style.borderStyle = "solid";
      columnaTabla.style.borderColor = "black";
      //Agregamos los td a los tr
      filaTabla.appendChild(columnaTabla);
    }
    //Agregamos los tr a la tabla
    tablaDibujo.appendChild(filaTabla);
  }
  //Agregamos la tabla a la zona de dibujo
  let tablero = document.getElementById("zonadibujo");
  tablero.appendChild(tablaDibujo);

  //Creamos un evento en cada celda de colores
  //Seleccionamos el nodeList con filaColores
  let filacolores = document
    .getElementById("paleta")
    .getElementsByTagName("tr")
    .item(0)
    .querySelectorAll("td");
  console.log(filacolores);

  //Recorremos la lista de nodos y creamos un evento en cada nodo. El evento lanza la función obtenerColor
  for (i = 0; i < filacolores.length; i++) {
    filacolores.item(i).addEventListener("mousedown", obtenerColor, false);
  }
  //Activamos los eventos en las celdas de la tabla donde dibujamos
  activarEventos();



  //Con esta funcion eliminamos la clase "seleccionado" de cualquier color que lo tuviese aplicado.
  function desactivarSeleccionado() {
    for (i = 0; i < filacolores.length; i++) {
      filacolores.item(i).classList.remove("seleccionado");
    }
  }

  //Función con la que seleccionamos la clase de cada casilla de la fila de colores
  //Esta clase la aplicaremos al elemento donde se produzca el evento y de esa forma aplicará el estilo
  //que tenga seleccionado. De esta forma al cambiar de colores en el CSS los nuevos colores se aplicaran
  //sin problema. Tambien aplica la clase seleccionado para que la casilla del color que pulsemos se remarque
  function obtenerColor() {
    //Eliminamos la clase seleccionado de cualquier casilla que lo pudiera tener
    desactivarSeleccionado(); 
    //Guardamos la clase asociada a cada color
    colorElegido = this.getAttribute("class");   
    //Aplicamos seleccionado al color que hemos pulsado
    this.classList.add("seleccionado");
  }
}
////////////////////////////////////////////////////////////////////////////////////
//Funcion que cambia el texto de estado del pincel segun el pincel esté activo o no.
////////////////////////////////////////////////////////////////////////////////////
function estadoPincel(pincelActivado) {
  if (!pincelActivado) {
    document.getElementById("pincel").innerHTML = "Pincel DESACTIVADO";
  } else {
    document.getElementById("pincel").innerHTML = "Pincel ACTIVADO";
  }
}
/////////////////////////////////////////////////////////////////////////////////
//Funcion que activa los eventos en cada una de las celdas de la tabla de dibujo.
/////////////////////////////////////////////////////////////////////////////////
function activarEventos() {
  let casillas = document.getElementById("tabla").getElementsByTagName("tr");
  console.log(casillas);
  for (i = 0; i < casillas.length; i++) {
    for (j = 0; j < casillas.item(i).querySelectorAll("td").length; j++) {
      casillas
        .item(i)
        .querySelectorAll("td")
        .item(j)
        .addEventListener("mouseover", pintar, false);
      casillas
        .item(i)
        .querySelectorAll("td")
        .item(j)
        .addEventListener("mousedown", activarPincel, false);
      casillas
        .item(i)
        .querySelectorAll("td")
        .item(j)
        .addEventListener("mousedown", pintar, false);
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que sirve para aplicar la clase seleccionada a cada elemento donde salta el evento.
//De esta forma aplicamos el color.
/////////////////////////////////////////////////////////////////////////////////////////////
function pintar() {
  if (pincelActivado) {
    this.setAttribute("class", colorElegido);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que cambia el estado del pincel. Si el false el pincel estara apagado y no pintara.
/////////////////////////////////////////////////////////////////////////////////////////////
function activarPincel() {
  if (pincelActivado) {
    pincelActivado = false;
  } else {
    pincelActivado = true;
  }

  estadoPincel(pincelActivado);
}
