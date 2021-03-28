var usuario = {
    nombre: 'daniel',
    apellido: 'castro',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${usuario.nombre} pesa ${usuario.peso} Kg`);

const INCREMENTO_PESO = 0.2 ;
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for(var i = 1; i<=365;i++){
    var random = Math.random()
    if(random < 0.25){
        //aumenta de peso
        aumentarDePeso(usuario)
    }else if(random < 0.5){
        //adelgazar
        adelgazar(usuario)
    } 
}

console.log(`Al final del año ${usuario.nombre} pesa ${usuario.peso.toFixed(2)} Kg`);