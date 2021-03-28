class Persona{
    constructor(nombre, apellido, altura){
        //this hace referenia al objeto q hemos creado
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 20;
        this.altura = altura;
    }

    saludar(){
        if(this.altura > 1.8){
            console.log(`Hola me llamo ${this.nombre.toUpperCase()} ${this.apellido} y mi edad es ${this.edad} y soy alto`);
        }else{
            console.log(`Hola me llamo ${this.nombre.toUpperCase()} ${this.apellido} y mi edad es ${this.edad}  y soy bajo`);
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        //despues podemos utilizar this, pero en esteejmplo no
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy muy pro`)
    }
}

// crea un nuevo objeto con el prototipo de persona
 var daniel = new Persona('daniel','castro',1.9);
 var mimi = new Persona('miriam','alejos',1.7);
var djcadaniel = new Desarrollador('Daniel','Castro');
var cesar = new Desarrollador('cesar','lazaro');
