import axios from 'axios';

const todosPersonajes = async (state) => {
    const peticion = await axios.get('https://pokeapi.co/api/v2/type')
    state(peticion.data.results)
}

export {
    todosPersonajes
}