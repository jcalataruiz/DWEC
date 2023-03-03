let nombres=[];
let apellidos=[];
let fechas=[];
let telefonos=[];


function insetarFecha(lista, fecha){
    let expresion=/(\d{2}\/\d{2}\/\d{4})/
    if(expresion.test(fecha)){
        lista.push(fecha);
    }else{
        console.log("error en formato de fecha")
    }
}
function insertarNombre(lista,nombre){
    nombre=nombre.toLowerCase();
    lista.push(nombre);
}
function insertarApellidos(lista,apellidos){
    apellidos=apellidos.toLowerCase();
    lista.push(apellidos);
}
function insertartelefono(lista, numero){
    let expresion=/^[976]{1}[0-9]{8}$/;
    if(expresion.test(numero)){
        lista.push(numero);
    }else{
        console.log("El numero dbe empezar por 9,7 o 6 y tener 9 digitos")
    }
}
function imprimePersonasOrdenadas(lista){
    lista=lista.sort();
    for (let i = 0; i < lista.length; i++) {
        lista[i]=lista[i][0]+lista[i].substr(1);
        console.log(lista[i]);           
    }
    console.log("ok")
}
//Persona 1
insertarNombre(nombres,"Jose");
insertarNombre(apellidos,"calatayud");
insetarFecha(fechas,"14/03/1980");
insertartelefono(telefonos,686317082);

insertarNombre(nombres,"pedro");
insertarNombre(apellidos,"RUIZ");
insetarFecha(fechas,"14/03/1980");
insertartelefono(telefonos,686317082);

insertarNombre(nombres,"SANTIAGO");
insertarNombre(apellidos,"Perez");
insetarFecha(fechas,"14/03/1980");
insertartelefono(telefonos,686317082);

insertarNombre(nombres,"PEPE");
insertarNombre(apellidos,"Gomez");
insetarFecha(fechas,"14/03/1980");
insertartelefono(telefonos,686317082);

imprimePersonasOrdenadas(apellidos);
console.log("ok")
