var config = require('./configuracion')
//let mathjs = require('mathjs')
var { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } = require('mathjs')
//var mathjs = require('mathjs')

//Clases
class Persona{
    id
    nombre
    apellido

    constructor(id, nombre, apellido, fechaNac){
        //logica de instanciación
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
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

var persona1 = new Persona(1, "Luke", "Skywalker", new Date(2005, 9, 24));
var persona2 = new Persona(2, "Leia", "Skywalker", new Date(2010, 0, 10));


//Cansancio
console.log(persona1.cansancio);

persona1.caminar(10);
console.log(persona1.cansancio);

persona1.dormir(8);
console.log(persona1.cansancio);

console.log(round(e, 3));

//Intentar calcular la edad a partir de la fecha de nacimiento

//fecha actual - fecha de nacimiento / cantidad de minutos de un año

//Implementar la funcion de dormir