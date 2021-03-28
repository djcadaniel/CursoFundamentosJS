var contador = 0;

const LLUEVE  = () => Math.random() < 0.25;

do {
    contador++;
    
}while(!LLUEVE()){

}

// if(contador >= 2){
//     console.log(`Fui a ver si llovía ${contador} veces`);
// }else{
//     console.log(`Fui a ver si llovía ${contador} vez`);
// }
var frecuencia = contador === 1 ? "vez" : "veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);