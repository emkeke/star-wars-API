import { useState, useEffect } from 'react'
import StarWarsAPI from '../services/StarWarsAPI'
import { useParams } from 'react-router-dom'

const FilmPage = () => {
        const [film, setFilm] = useState()
        const { id } = useParams()
      
        const getFilm = async (id) =>{
          const res = await StarWarsAPI.getFilm(id)
          setFilm(res)
          
        }
      
        useEffect(() => {
          getFilm(id)
        }, [id])
      
        console.log(film)
      
        return (
          <>
            {film &&
                <div><h2 className='text-center'>{film.title}details</h2></div>
            }
              
      
          </>
        )
    
}

export default FilmPage
