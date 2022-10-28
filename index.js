var config = require('./configuracion')
//let mathjs = require('mathjs')
var { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } = require('mathjs')
//var mathjs = require('mathjs')

//Clases
class Person{
    id
    nombre
    apellido

    constructor(id, nombre, apellido, fechaNacimiento){
        //logica de instanciación
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.cansancio = 0
        this.fechaNacimiento = fechaNacimiento
        this.fechaCreacion = new Date()
        this.informacionCompleta = `${this.nombre} - ${this.apellido} - Fecha de nacimiento: ${this.fechaNacimiento}` 
        this.calcularEdad()
    }

    calcularEdad(){
        return (new Date() - this.fechaNacimiento) / 31557600000 //24 * 3600 * 365.25 * 1000
    }

    caminar(kilometrosCaminados){
        this.cansancio = this.cansancio + (1.5 * kilometrosCaminados)
        console.log(`${this.nombre} ha caminado ${kilometrosCaminados} km., por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    dormir(horasDeSueno){
        this.cansancio = this.cansancio - (2 * horasDeSueno)
        console.log(`${this.nombre} ha dormido ${horasDeSueno}, por lo que se encuentra con un nivel de cansancio ${this.cansancio}`)
    }

    hablar(){
        return null
    }
}

var persona1 = new Persona(1, "Luke", "Skywalker", new Date(2005, 9, 24)) // el mes es indexado como 0
var persona2 = new Persona(2, "Leia", "Skywalker", new Date(2010, 0, 10))


//Edad
//console.log(persona1.calcularEdad())
//persona1.fechaNacimiento = new Date(2006, 9, 24)
//console.log(persona1.calcularEdad())
//persona1.fechaNacimiento = new Date(2010, 0, 10)
//console.log(persona1.calcularEdad())

//Cansancio
console.log(persona1.cansancio)

persona1.caminar(10)
console.log(persona1.cansancio)

persona1.dormir(8)
console.log(persona1.cansancio)

console.log(round(e, 3))
//console.log(mathjs.log)

//persona1.caminar(15)
//console.log(persona1)
//console.log(persona2)


//Intentar calcular la edad a partir de la fecha de nacimiento

//fecha actual - fecha de nacimiento / cantidad de minutos de un año

//Implementar la funcion de dormir