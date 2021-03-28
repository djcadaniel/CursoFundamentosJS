var usuario = {
    nombre :'daniel',
    hoby : 'cantar',
    edad : 35,
    ingeniero : false,
    cocinero : false,
    cantante : true
}

function imprimir(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero');
    }else{
        console.log('no es ingeniero')
    }
    if(persona.cocinero){
        console.log('cocinero')
    }
    if(persona.cantante){
        console.log('cantante')
    }
}

imprimir(usuario);

const MAYORIA_DE_EDAD = 18;

function mayorEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirMayorEdad(persona){
    if(mayorEdad(persona)){
        console.log('es mayor de edad');
    }else{
        console.log('es menor de edad');
    }
}

imprimirMayorEdad(usuario)