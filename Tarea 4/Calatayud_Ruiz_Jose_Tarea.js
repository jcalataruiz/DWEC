// Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del edificio
//y de los propietarios de cada piso. Para ello queremos almacenar la siguiente información de cada edificio:

// calle.
// número.
// código postal.
// plantas del edificio (dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos el nombre del propietario).
// Se pide:

// Crear un objeto que nos permita instanciar edificios. Cada vez que instanciemos un edificio le pasaremos la calle, número y código postal como parámetros. Se pide además crear los siguientes métodos para el objeto Edificio:
// agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
// modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
// modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
// modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.
// imprimeCalle // Devuelve el nombre de la calle del edificio.
// imprimeNumero // Devuelve el número del edificio.
// imprimeCodigoPostal // Devuelve el código postal del edificio.
// agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
// imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
// Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:
// construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.
// Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:
// xxxxxxxx es ahora el propietario de la puerta x de la planta x.
// Aquí se muestra un ejemplo de lo que tendría que mostrar la aplicación:

// Trabajando con objetos Javascript:

// Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

// Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
// Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
// Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
// El código postal del edificio A es: 15706.
// La calle del edificio C es: San Clemente.
// El edificio B está situado en la calle Camino Caneiro número 29.
// Agregamos 2 plantas y 3 puertas por planta al edificio A...

// Agregamos 4 propietarios al edificio A...

// Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
// Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
// Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
// Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
// Listado de propietarios del edificio calle García Prieto número 58

// Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
// Propietario del piso 2 de la planta 1: Luisa Martinez.
// Propietario del piso 3 de la planta 1: Marta Castellón.
// Propietario del piso 1 de la planta 2:
// Propietario del piso 2 de la planta 2: Antonio Pereira.
// Propietario del piso 3 de la planta 2:
// Agregamos 1 planta más al edificio A...

// Agregamos 1 propietario más al edificio A planta 3, puerta 2...

// Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
// Listado de propietarios del edificio calle García Prieto número 58

// Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
// Propietario del piso 2 de la planta 1: Luisa Martinez.
// Propietario del piso 3 de la planta 1: Marta Castellón.
// Propietario del piso 1 de la planta 2:
// Propietario del piso 2 de la planta 2:
// Propietario del piso 1 de la planta 3:
// Propietario del piso 2 de la planta 3: Pedro Meijide.

class Edificio {
  calle;
  numero;
  codigoPostal;
  plantas = new Array();
  piso = new Array();

  llenarplantasypisos1(numplantas, puertas) {
    let p = this.plantas.length;
    for (let i = p; i < p + numplantas; i++) {
      this.plantas[i] = [];
      for (let j = 0; j < puertas; j++) {
        this.plantas[i][j] = "vacio";
      }
    }

    console.log("....");
    console.log(this.plantas);
    console.log("....");
  }

  modificarNumero(numero) {
    this.numero = numero;
  }
  modificarCalle(calle) {
    this.calle = calle;
  }
  modificarCodigoPostal(codigoPostal) {
    this.codigoPostal = codigoPostal;
  }
  imprimeCalle() {
    return this.calle;
  }
  imprimeNumero() {
    return this.numero;
  }
  imprimeCodigoPostal() {
    return this.codigoPostal;
  }
  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta][puerta] = nombre;
  }

  // plantas=[[pepe,luis,jorge],[pepe2,luis2],[,2,3,4]];

  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    document.write(
      "Construido nuevo edificio en calle: " +
        this.imprimeCalle() +
        " nº: " +
        this.imprimeNumero() +
        ", C.P.: " +
        this.imprimeCodigoPostal() +
        "<br />"
    );
  }
}
let edificioA = new Edificio("generalDAvila",23, 39005);
