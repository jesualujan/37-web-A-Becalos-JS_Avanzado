// JAVASCRIPT POR SI SOLO NO PUEDE HACERLO TODO
// CONSUMIR UNA API
// PARA ESTOY NECESITAMOS USAR A JAVASCRIPT PERO CON ESTEROIDES
// PARA ELLO VAMOS A USAR NPM (NODE PACKAGE MANAGER) 
// EN POCAS PALABRAS SON LOS PAQUETES QUE LE DARAN PODERES A JAVASCRIPT
//* sitio: https://www.npmjs.com/ 
//? Primer paso antes de hacer código debo inicializar npm, para ello
//? vamos a usar el siguiente comando: npm init --y
//? me va a crear un package.json (scripts, dependencias -> npm)
//* para este ejemplo vamos a usar un paquete llamado fetch

// vamos a consumir nuestra primera API
// -> https://api.thedogapi.com/v1/breeds

// url de la API con un límite de 15 resultados ( 15 perritos )
const URI = 'https://api.thedogapi.com/v1/breeds?limit=15'

//* creamos una función para obtener los datos de los perros

const getDataDogs = () => {
    //promesas
    return fetch(URI)
    .then(handleReponse)  // cumplir mi promesa -> Maneja la respueda de la API
    .then(processData) // cumplir mi promesa  -> Procesa los datos recibidos
    .catch(handleError) // manejara cualquier error que ocurra (rejected)

}

// manejamos la respueta que viene de la api 
const handleReponse = (response) => {
    if(!response.ok){
        // si la respuesta no es ok, lanza un error
        console.log(`HTTP ERROR! STATUS: ${response.status}`)
        // throw new Error (`HTTP ERROR! STATUS: ${response.status}`)
    }
    // debo convertir la respueta a un objeto JSON
    return response.json()
}
 // Procesa los datos recibidos
const processData = (data) => {
    // utilizamos un método de los arreglos llamado map
    // map me va a construir un arreglo nuevo con los datos que yo le indique
    // mapeo los datos para obtener solo la información relevante o que necesito.
    const relevantData = data.map(dog => ({
        id: dog.id,
        name: dog.name,
        bred_for: dog.bred_for,
        temperament: dog.temperament,
        origin: dog.origin,
        image: dog.image ? dog.image.url : 'No imagen disponible'
    }))
    // muestra los datos relevantes en la consola
    console.log(relevantData)
    return relevantData
}

// maneja cualquier error que ocurra durante fetch
const handleError = (error) => {
    // muestra un mensaje de error en la consola
    console.error('Error al obtener los datos: ', error)
}

//llamó a la función principal para obtener los datos de los perros.
getDataDogs()