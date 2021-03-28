function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}//no hace nada
    fn.prototype = prototipoPadre.prototype;//todas las funciones tienen el atributo prototype
    prototipoHijo.prototype = new fn;//pasamos a otros objeto para que no este pisando de su padre
    prototipoHijo.prototype.constructor = prototipoHijo //asignar la funcion constructora, porq si no estaria llamando al protipo padre
}

function Persona(nombre, apellido, altura){
    //this hace referenia al objeto q hemos creado
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.altura = altura;
}
//los prototipo siempre escribir arriba
Persona.prototype.saludar = function(){
    if(this.altura > 1.8){
        console.log(`Hola me llamo ${this.nombre.toUpperCase()} ${this.apellido} y mi edad es ${this.edad} y soy alto`);
    }else{
        console.log(`Hola me llamo ${this.nombre.toUpperCase()} ${this.apellido} y mi edad es ${this.edad}  y soy bajo`);
    }
}
//this es un objeto window
Persona.prototype.soyAlto = () => this.altura > 1.8

function Desarrollador(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}
//esto va despues de la funcionDesarrollador
heredaDe(Desarrollador, Persona)
Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


// crea un nuevo objeto con el prototipo de persona
 var daniel = new Persona('daniel','castro',1.9);
 var mimi = new Persona('miriam','alejos',1.7);
var djcadaniel = new Desarrollador('Daniel','Castro');
var cesar = new Desarrollador('cesar','lazaro')
;// daniel.soyAlto();
// mimi.soyAlto();

// daniel.saludar()
// mimi.saludar()

