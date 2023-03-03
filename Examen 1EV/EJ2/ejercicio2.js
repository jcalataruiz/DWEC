

class Persona {

    nombre;
    apellidos;
    nacimiento;

    constructor (nombre, apellidos, nacimiento){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nacimiento=nacimiento;
    }
    getNombre(){
        return this.nombre;
    }
    getApellidos(){
        return this.apellidos;
    }
    getNacimiento(){
        return this.nacimiento;
    }
    setNombre(nombre){
        this.nombre=nombre
    }
    setApellidos(apellidos){
        this.apellidos=apellidos
    }
    setNacimiento(nacimiento){
        this.nacimiento=nacimiento
    }
}
class PersonaCivil extends Persona{
    dni;
    telefono;

    constructor (nombre, apellidos, nacimiento, dni, telefono){
        super(nombre,apellidos,nacimiento);
        this.dni=dni;
        this.telefono=telefono;

    }
    getDni(){
        return this.dni;
    }
    getTelefono(){
        return this.telefono;
    }
    setDni(dni){
        let expresion=/\d{8}[A-Za-z]/
        if (expresion.test(dni)){
            this.dni=dni;
        }else{
            console.log("error en dni")
        }
    }
    setTelefono(telefono){
        let expresion=/^[976]{1}[0-9]{8}$/
        if (expresion.test(telefono)){
            this.telefono=telefono;
        }else{
            console.log("error en telefono")
        }
    }
    imprimir(){
        // console.log(persona.getNombre()+" "+getApellidos()+" "+getNacimiento()
        // +" "+getDni()+" "+getTelefono())
        console.log(this.nombre+" "+this.apellidos+" "+this.nacimiento
        +" "+this.dni+" "+this.telefono)
    }
}

let p1=new PersonaCivil()
p1.setNombre("jose");
p1.setApellidos("calatayud");
p1.setNacimiento("14/03/1980")
p1.setDni("72052532h");
p1.setTelefono("810510515")

p1.imprimir();