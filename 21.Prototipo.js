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
Persona.prototype.soyAlto = () => this.altura > 1.8
// crea un nuevo objeto con el prototipo de persona
var daniel = new Persona('daniel','castro',1.9);
var mimi = new Persona('miriam','alejos',1.7);

daniel.soyAlto();
mimi.soyAlto();

daniel.saludar()
mimi.saludar()

