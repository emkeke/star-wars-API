/**
 * Film Page
 */

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import Button from 'react-bootstrap/Button'

const FilmsPage = () => {
  const [films, setFilms] = useState()

  const getFilms = async () => {
    //Get the films from the API
   const data = await StarWarsAPI.getFilms()

   setFilms(data)

  }

  useEffect(() => {
    getFilms() 
  }, [])

  console.log(films)

  return (
    <>
      <h2 className='text-center text-yellow'>Films</h2>
        { films && (
          <div className="d-flex flex-wrap mt-4">
            { films.results.map((film, index) => (
              <div className='w-50' key={index}> 
                <div className='card m-2'>
                  <div className='card-title text-center'>
                    <h5 id='film-title'>{film.title}</h5>
                  </div>
                  <div className='card-text'>
                    <p>Episode {film.episode_id}</p>
                    <p>Released {film.release_date}</p>
                    <p>Characters: {film.characters.length}</p>
                  </div>
                  <Button id='btn-films' as={Link} to={`/films/${index + 1}`}>
                    Read more
                  </Button>
                </div>
              </div>
            ))
            }
          </div>
        )}         
    </>
  )
}

export default FilmsPage