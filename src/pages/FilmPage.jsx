import { useState, useEffect } from 'react'
import StarWarsAPI from '../services/StarWarsAPI'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers'

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
              <>
                <h2 className='text-center text-yellow'>{film.title}</h2>
                <div className='card'>
                  <div className='p-2'>
                    <p>Episode: {film.episode_id}</p>
                    <p>Director: {film.director}</p>
                    <p>Producer: {film.producer}</p>
                    <p>Release date: {film.release_date}</p>
                    { film.characters.map(index => (
                      <Link to={`/people/${index + 1}`} type="link" className='btn'>{film.characters}</Link>
                    ))
                    
                    }
                  </div>
                </div>
              </>
            }     
          </>
        )
    
}

export default FilmPage
