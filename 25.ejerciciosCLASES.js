var nombre = prompt('Ingrese nombre de deporte:')

class Deporte{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    mensaje(){
        console.log(`Tu deporte es el ${this.name} y tienes que elegir el modo dificil para mejorar y ser bueno, ya que es de tipo: ${this.type}`);
    }
}

class Voley extends Deporte{
    constructor(name,type,edad){
        super(name,type);
        this.edad = edad;
    }
    saludar(){
        console.log(`El ${this.name} es de tipo ${this.type} y su edad es :${this.edad}`);
    }
}

var daniel = new Deporte(nombre, 'unisex');
var mimi = new Voley(nombre, 'unisex', 25);