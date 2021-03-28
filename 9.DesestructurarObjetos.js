var daniel = {
    hoby : 'cantar',
    capital : 'lima',
    edad : 27
}

function imprimirMayus(p){
    // var hoby = p.hoby;
    var { hoby } = p;
    console.log(hoby.toUpperCase());
}

imprimirMayus(daniel);
