var usuario1 = {
    nombre : 'daniel',
    apellido: 'castro',
    altura: 1.80
}
var usuario2 = {
    nombre : 'mimi',
    apellido: 'alejos',
    altura: 1.55
}
var usuario3 = {
    nombre : 'be',
    apellido: 'socua',
    altura: 1.56
}
var usuario4 = {
    nombre : 'cesar',
    apellido: 'lázaro',
    altura: 1.75
}

// const esAlta = persona => persona.altura > 1.74;
const esAlta = ({ altura }) => altura > 1.74;
const esBaja = ({ altura }) => altura < 1.74;

var personas = [usuario1,usuario2,usuario3,usuario4];

for(var i =0; i < personas.length ;i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`);
}

var personasAltas = personas.filter(esAlta);
console.log(personasAltas);

var personasBajas = personas.filter(esBaja);
console.log(personasBajas);

const pasarAlturaAcms = persona => ({
    ...persona,
    altura: persona.altura * 100
})
var personasCms = personas.map(pasarAlturaAcms);
console.log(personasCms);