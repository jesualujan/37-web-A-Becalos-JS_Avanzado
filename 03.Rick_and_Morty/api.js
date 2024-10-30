// try catch

// Obtener la referencia al campo de busqueda por su ID y al contenedor de persosanes 
// DOM 
const searchInput = document.getElementById('search')
const charactersContainer = document.getElementById('characters')


// IMPLEMENTANMOS EL ASINCRONIMOS async await 
// Función asincrónica para obtener personajes de la API según el nombre
   async function getCharacters(name){
        const URI =  `https://rickandmortyapi.com/api/character/?name=${name}`
        try{
            // Realizar la solicitud a la API de rick and Morty con el nombre proporcionado
            const response = await fetch(URI) // hago la petición a la Base url (URI)
            const data = await response.json() // Convertir la respuesta en formato JSON
            // Loggear los datos obtenidos en la consola
            console.log(data)
            charactersContainer.innerHTML = '' // Limpiar el contenedor de personajes antes de agregar nuevos
       
       // Crear una tarjeta para cada personaje 
       const characterCards = data.results.map(character => {
            // template string para tener html y javascript
        return `
          <div class="col-md-3 mb-3">
            <div class="card h-100">
                <img src=${character.image} alt=${character.name} class="card-img-top">
                    <div class="card-body"> 
                        <h3 class="card-title">${character.name}</h3>
                        <h4 class="card-text">
                            <span class="text-muted">Id:</span>${character.id} <br>
                            <span class="text-muted">Species:</span>${character.species}<br>
                            <span class="text-muted">Status:</span>${character.status}<br>
                            <span class="text-muted">Gender:</span>${character.gender}<br>
                            <span class="text-muted">Origin:</span>${character.origin.name}<br>
                            <span class="text-muted">Location:</span>${character.location.name}<br>
                        </h4>
                    </div>
                </div>        
            </div>
        `
       }).join('') // Unir todos los elementos en una sola cadena de texto
       charactersContainer.innerHTML = characterCards // Actualizar el contenedor con las nuevas tarjetas
        }catch(error){
            // manejo de errores en caso de que falle la solicitud a la api
            console.log('Error al obtener los personajes:', error)
            console.error('Error al obtener los personajes:', error)
        }
    }

    // buscador
    // escuchar evento de entrada para el input de busqueda
    searchInput.addEventListener('input', (event) => {
        getCharacters(event.target.value) // Llamar a la función getCharacters con el valor del input de búsqueda
    })

// Cargar personajes iniciales al cargar la página
getCharacters('')