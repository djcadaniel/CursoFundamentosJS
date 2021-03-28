const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

//para hacer un request
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts =  { crossDomain: true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, opts, function(persona){
        console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)

        if(callback){
            callback()
        }
    });
}

//para obtenr 14 personajes
// for(i=1; i<15;i++){
//     obtenerPersonaje(i)
// }


/*===mantener el orden de llamado===== */
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(7)
                })
            })
        })
    });
})


