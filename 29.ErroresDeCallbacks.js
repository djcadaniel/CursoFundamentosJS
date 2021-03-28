const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts =  { crossDomain: true }

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $
        $.get(url, opts, callback)
        .fail(() =>{
            console.log(`sucedió un error, no se pudo obtener el personaje ${id}`)
        })
}

      
/*===mantener el orden de llamado===== */
obtenerPersonaje(1, function(persona){
    console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
    obtenerPersonaje(2, function(persona){
        console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
        obtenerPersonaje(3, function(persona){
            console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
            obtenerPersonaje(4, function(persona){
                console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
                obtenerPersonaje(5, function(persona){
                    console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
                    obtenerPersonaje(7, function(persona){
                        console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
                    })
                })
            })
        })
    });
})


