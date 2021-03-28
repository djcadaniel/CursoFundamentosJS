class Persona{
    constructor(nombre, apellido, altura){
        //this hace referenia al objeto q hemos creado
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = 20;
        this.altura = altura;
    }

    saludar(fn){
        var nombre = this.nombre;
        var apellido = this.apellido;
        if(this.altura > 1.8){
            console.log(`Hola me llamo ${nombre.toUpperCase()} ${apellido} y mi edad es ${this.edad} y soy alto`);
        }else{
            console.log(`Hola me llamo ${nombre.toUpperCase()} ${apellido} y mi edad es ${this.edad}  y soy bajo`);
        }

        if(fn){
            console.log('probando si llega y si llega')
            fn(nombre, apellido,false)
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

    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy muy pro en frontend y backend`)
        if(fn){
            fn(nombre, apellido,true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev){
        console.log(`Ah mirá, no sabía que eres desarrollador`)
    }else{
        console.log('no eres desarrollador morenita')
    }
}

// crea un nuevo objeto con el prototipo de persona
var daniel = new Persona('daniel','castro',1.9);
var mimi = new Persona('miriam','alejos',1.7);
var djcadaniel = new Desarrollador('Daniel','Castro');
var cesar = new Desarrollador('cesar','lazaro');

daniel.saludar();
mimi.saludar(responderSaludo);
djcadaniel.saludar(responderSaludo);
// cesar.saludar();