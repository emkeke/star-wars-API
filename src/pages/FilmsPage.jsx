/**
 * Film Page
 */

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
//import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
//import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'
//import Col from 'react-bootstrap/Col'


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
      <h2 className='text-center'>Films</h2>
        { films && (
          <div className="d-flex flex-wrap mt-4">
            { films.results.map((film, index) => (
              <div className='w-50'>
                <div className='card m-2'>
                  <ListGroup  key={index}>
                    <div className='card-body'>
                      <div className='card-title text-center'>
                        <h5>{film.title}</h5>
                      </div>
                      <div className='card-text'>
                        <p>Episode {film.episode_id}</p>
                        <p>Released {film.release_date}</p>
                        <p>Characters: {film.characters.length}</p>
                      </div>
                      <Button as={Link} to={`/film/${index}`}>
                        Read more
                      </Button>
                    </div>
                  </ListGroup>
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