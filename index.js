var config = require('./configuracion')
//let mathjs = require('mathjs')
var { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } = require('mathjs')
//var mathjs = require('mathjs')

class superHero{
    constructor(id, nombre, gen, fechaNac){
        this.id = id
        this.nombre = nombre
        this.cansancio = 0
        this.genero = gen
        this.fechaNacimiento = fechaNac
        this.fechaCreacion = new Date()
        this.informacionCompleta = `${this.nombre} nacio el: ${this.fechaNacimiento}` 
        this.calcularEdad()
    }

    calcularEdad(){
        return (new Date() - this.fechaNacimiento) / 31557600000 //24hr * 3600sgs * 365.25 day * 1000 miliseconds
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

var sHero1 = new superHero(1, "Iron Man", 'M',  new Date(1965, 3, 4)) ;
var sHero2 = new superHero(2, "Black Widow", 'F',new Date(1984, 10, 22));