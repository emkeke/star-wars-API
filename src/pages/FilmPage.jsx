import { useState, useEffect } from 'react'
import StarWarsAPI from '../services/StarWarsAPI'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/index'

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
                  <div className='p-4'>
                    <h6>Episode: {film.episode_id}</h6>
                    <h6>Director: {film.director}</h6>
                    <h6>Producer: {film.producer}</h6>
                    <h6>Release date: {film.release_date}</h6>
                    <h6 className=''>Characters:</h6>
                    { film.characters.map((char, index) => (
                      <div className='text-center'>
                        <Link to={`/people/${getIdFromUrl(char)}`} key={index} className='btn'>Character: {getIdFromUrl(char)}</Link>    
                      </div>  
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
