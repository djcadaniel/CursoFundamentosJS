const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

//para hacer un request
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts =  { crossDomain: true }
const onPeopleResponse = function(persona){
    console.log(`hola soy ${persona.name} y mi masa es de : ${persona.mass}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse);
}

//para obtenr 14 personajes
for(i=1; i<15;i++){
    obtenerPersonaje(i)
}



