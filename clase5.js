var persona = {
    nombre : 'mimi',
    apellido : 'castro',
    edad : 25
}

var daniel = {
    talla :'1.75',
    apellido : 'alejos',
    edad : 27
}


function imprimirMayusculas(n){
    var nombre = n.toUpperCase()
    console.log(nombre)
}

imprimirMayusculas(persona.nombre);