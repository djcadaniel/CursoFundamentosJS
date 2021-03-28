var sacha = {
    hoby : 'cantar',
    edad : 27
}

function imprimir(persona){
    var { hoby } = persona;
    console.log(hoby.toUpperCase());
}

imprimir(sacha);
//pasamos como objetos como parametros
function cumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1//si puedo modicar y crea como un nuevo objeto
    }
}
