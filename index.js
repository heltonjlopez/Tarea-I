//Clases
class Persona{
    id
    nombre
    apellido
    fechaNacimiento
    genero

    constructor(id, nombre, apellido, fechaNac, gen){
        //logica de instanciación
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.genero = gen
        this.cansancio = 0
        this.fechaNacimiento = fechaNac
        this.fechaCreacion = new Date()
        this.informacionCompleta = `${this.nombre} - ${this.apellido} - Fecha de nacimiento: ${this.fechaNacimiento}` 
        this.calcularEdad()
    }

    calcularEdad(){
        return (new Date() - this.fechaNacimiento) / 31557600000 //24 * 3600 * 365.25 * 1000
    }

    caminar(kilometrosCaminados){
        this.cansancio = this.cansancio + (1 * kilometrosCaminados)
        console.log(`${this.nombre} ha caminado ${kilometrosCaminados} km., por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    dormir(){

    }

    hablar(){
        return null
    }
}

var persona1 = new Persona(1, "Luke", "Skywalker", 1974, "M", new Date(2005, 9, 24))
var persona2 = new Persona(2, "Leia", "Skywalker", 1974, "F", new Date(2001, 0, 24))
var persona3 = new Persona(3, "Obi", "wan kenobi", 1964, "M", new Date(2002, 3, 24))
var persona4 = new Persona(4, "anakin", "skywalker", 1985, "M", new Date(2005, 9, 24))

var persona1 = new Persona(1, "Luke", "Skywalker", new Date(2005, 9, 24)) // el mes es indexado como 0
var persona2 = new Persona(2, "Leia", "Skywalker", new Date(2010, 0, 10))

console.log(persona1.calcularEdad())
persona1.fechaNacimiento = new Date(2002, 8, 27)
console.log(persona1.calcularEdad())
persona1.fechaNacimiento = new Date(2002, 10, 12)
console.log(persona1.calcularEdad())
//persona1.caminar(15)
//console.log(persona1)
//console.log(persona2)

let = nombre = '';

//Intentar calcular la edad a partir de la fecha de nacimiento

//fecha actual - fecha de nacimiento / cantidad de minutos de un año

//Implementar la funcion de dormir