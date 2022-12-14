

/*Cuando todos los elementos de la página se carguen se ejecuta la función iniciar*/
window.onload=iniciar;

/*en la función iniciar creamos 3 eventos. El primero es un evento que servirá para que cuando se haga click en el input validar, se ejecutará
la funcion de validar en el formulario.
Los otros dos son los que ponen en mayúsculas el contenido de las cajas "nombre"y "apellidos" cuando el foco no esté en ellos, "blur". El tercer elemento
es false, porque queremos que se ejecute la función despues de dispararse el evento*/
function iniciar(){
	
	document.getElementById("enviar").addEventListener('click',validar,false);
	document.getElementById("nombre").addEventListener('blur',ponerEnMayusculas,false);
	document.getElementById("apellidos").addEventListener('blur',ponerEnMayusculas,false);
}

/*Esta función es la encargada de poner en mayúsculas el contenido de las cajas.*/
function  ponerEnMayusculas(){
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
	document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

/*A continuación tenemos todas las funciones de validación de todos los campos. Todas la funciones devolverán true o false segun cumplan o no los requisitos
de validación. Después se incluiran todas esta funciones en la función de validar(), que devolverá true y permitirá el envio en caso de que el resto de funciones sean true.
Todas las expresiones regulares comiezan por ^ y terminan por $ para que no se pueda coger un segmento de una cadena.

Función que valida que el campo nombre no este vacio. Si lo está, saca un mensaje el la zona errores y vuelve el foco a la caja*/
const validarNombre = ()=>{
    //Guardamos el valor de la caja en una variable
    let texto=document.getElementById("nombre").value;
    if (texto==""){
        //sacamos el fallo. Estose hace en todas las funciones
        document.getElementById("errores").innerHTML="Error en nombre. Nombre no puede estar vacio.";
        //Ponemos el foco en la caja
        document.getElementById("nombre").focus();
        return false;
    }else{
        return true;
    }
}
/*Lo mismo que la anterior función pero para la caja de apellidos*/
const validarApellidos = ()=>{
    //Guardamos el valor de la caja en una variable
    let texto=document.getElementById("apellidos").value;
    if (texto==""){
        document.getElementById("errores").innerHTML="Error en apellidos. Apellidos no puede ir vacio.";
        document.getElementById("apellidos").focus();
        return false;
    }else{
        return true;
    }
}
/*Función para validar la edad. Lleva por un lado un a expresión regular que limita que solo tenga de 1 a 3 dígitos
y por otro lado que edad sea mayor o igual a 0 y menor de o igual a 105. Si no cumple alguna de las condiciones retorna false*/
const validarEdad=()=>{
    //Guardamos el valor de la caja en una variable
    let edad=document.getElementById("edad").value;  
    //creamos la expresion regular para validar
    let expresionRegular =/^\d{1,3}$/;
    if (edad.match(expresionRegular)&&((edad>=0))&&((edad<=105))){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en edad. La edad debe ser de 0 a 105.";
        document.getElementById("edad").focus();

        return false;
    }
}/* Función para validar el DNI. La expresión regular es para que tenga 8 dígitos (\d{8}), después un guión y finalmente una letra válida.
Por ejemplo he descartado la i la ñ o la o.*/
const validarDni=()=>{
    //Guardamos el valor de la caja en una variable
    let dni=document.getElementById("nif").value;
    //creamos la expresion regular para validar
    let expresionRegular=/^\d{8}-[A-Ha-hJ-Nj-nP-Zp-z]$/;
    if (dni.match(expresionRegular)&&(dni!="")){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en NIF. Debe contener 8 dígitos, guión y letra.";
        document.getElementById("nif").focus();
        return false;
    }
}
/* Función para la validación del e-mail. Como las anteriores he usado una expresión regular. Mencionar que aquí he usado el metodo test() que lo que hace es
devolver true o false. */
const validarEmail = () =>{
    //Guardamos el valor de la caja en una variable
    let email=document.getElementById("email").value;
    //creamos la expresion regular para validar
    let expresionRegular=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if(expresionRegular.test(email)){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en email.";
        document.getElementById("email").focus();
        return false;

    }

}
/*Función de validación de selector de provincia. Sabiendo que si no selecionamos ningún campo devuelve el valor 0, mediate un if controlamos
segun su valor sea 0 o no*/
const validarProvincia=()=>{
    //Guardamos el valor de la caja en una variable
    let provincia=document.getElementById("provincia").value;
    if (provincia==0){
        document.getElementById("errores").innerHTML="Error en campo provincia.";
        document.getElementById("provincia").focus();
        return false;
    }else{
        return true;
    }
}
/*Función de validación fecha.*/
const validarFecha=()=>{
    //Guardamos el valor de la caja en una variable
    let fecha=document.getElementById("fecha").value;
    //explicación de  la expresión: \d{2}-\d{2}-\d{4} esto es que sean 2 digitos despues un guión, otros 2 dígitos otro guión y despues 4 dígitos,
    //tras esto tenemos | que es lo mismo  que OR y finalmente \d{2}\/\d{2}\/\d{4}. Esto es igual que la primera parte pero al usar la / que es un caracter especial
    //debemos usar \ para escapar ese caracter especial. Asi lo entiende como literal
    let expresionRegular=/^(\d{2}-\d{2}-\d{4}|\d{2}\/\d{2}\/\d{4}){1}$/;
    if (expresionRegular.test(fecha)){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en fecha. Formato dd/mm/aaaa o dd-mm-aaaa.";
        document.getElementById("fecha").focus();
        return false;
    }
}

/* Función para validar el teléfono. Expresión regular para que sean nueve dígitos numéricos*/
const validarTelefono=()=>{
    //Guardamos el valor de la caja en una variable
    let telefono=document.getElementById("telefono").value;
    //creamos la expresión regular para validar
    let expresionRegular=/^\d{9}$/;
    if (expresionRegular.test(telefono)){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en telefono. Debe contener 9 digitos.";
        document.getElementById("telefono").focus();
        return false;
    }
}
/* Validar hora. */
const validarHora=()=>{
    //Guardamos el valor de la caja en una variable
    let hora=document.getElementById("hora").value;
    //creamos la expresión regular para validar. primer dígito acepta valores de 0 a 2 y se repite una vez. El segundo dígito acepte valores de 0 a 9 y se 
    //repite 1 vez, después vienen los 2 puntos, el tercer dígito acepta valores entre 0 y 5 y se repite una vez y el último dígito acepta valores de 0 a 9 
    //y se repite una vez
    let expresionRegular=/^[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/;
    if (expresionRegular.test(hora)){
        return true;
    }else{
        document.getElementById("errores").innerHTML="Error en hora. El formato debe ser hh:mm.";
        document.getElementById("hora").focus();
        return false;
    }
}
/*Esta es la función que controla la validación. Recibe el evento "e" para que en caso que que no cumpla las condiciones no ejecute la acción del formulario.
Ademas de todos los metodos de validación anteriores, tiene un metodo de confirmación de envío del formulario.*/
const validar =(e)=>{
    if( validarNombre()&&validarApellidos()&&validarEdad()&&validarDni()&&validarEmail()&&validarProvincia()
    &&validarFecha()&&validarTelefono()&&validarHora()&&confirmar()){
        return true
    }else{
        e.preventDefault();
        return false;
    }
}
//Método de confirmación del formulario. hace saltar un alert con dos opciones, si aceptas devuelve true con lo que validar devolverá true y hará que se envie el 
//formulario y si no lo aceptas retornará false con lo que el metodo validar retornara false y con el prevenDefault paralizará la acción del formulario.
const confirmar = ()=>{
    var retVal = confirm("¿Seguro desea continuar?");
    if( retVal == true ){
        return true;
    }else{
        alert("Se canceló la operacion");
        return false;
    }
}