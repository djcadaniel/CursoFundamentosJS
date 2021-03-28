var usuario = {
    nombre: 'daniel',
    apellido: 'castro',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${usuario.nombre} pesa ${usuario.peso} Kg`);

const INCREMENTO_PESO = 0.3 ;
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
//dias
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = usuario.peso - 3;
var dias = 0;

while (usuario.peso > META){
    // debugger
    if(comeMucho()){
        //aumentar de peso
        aumentarDePeso(usuario);
    }
    if(realizaDeporte()){
        //adelgazar
        adelgazar(usuario);
    }

    dias +=1;
}

console.log(`Pasaron ${dias} días, hasta que ${usuario.nombre} adelgazo 3kg`);