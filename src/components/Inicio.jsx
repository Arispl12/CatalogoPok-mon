import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funciones'
import axios from 'axios';


const Inicio = () => {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 
    const [personajes, setPersonajes] = useState(null)

    useEffect(() => {
        todosPersonajes(setPersonajes)
    },[])

    const handleClick = async (url) => {
        setLoading(true);
        setError(null); 
    
        try {
          const response = await axios.get(url);
          setData(response.data); 
        } catch (err) {
          setError('Error al cargar los datos'); 
        } finally {
          setLoading(false); 
        }
      };

  return (
    <>
       {personajes != null ? (
        personajes.map(personaje => (
            <div key={personaje.name}>
                <button onClick={() => handleClick(personaje.url)}>Buscar de tipo {personaje.name}</button>

                {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {data && (
        <pre>
          {JSON.stringify(data.pokemon, null, 2)} 
        </pre>
      )}
            </div>
    
        ))
       ) : ('no hay personajes')}
    
    
    </>

    
  )
}

export default Inicio
