/**
 * Film Page
 */

import {useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'

//import { ListGroup } from 'react-bootstrap/ListGroup'
//import Button from 'react-bootstrap/Button'

const FilmsPage = () => {
  const [films, setFilms] = useState([])

  const getFilms = async () => {
    //Get the films from the API
   const data = await StarWarsAPI.getFilms()
   setFilms(data)

   console.log(data)

  }

  useEffect(() => {
    getFilms()
  }, [])

  return (
    <>
      <h2 className='text-center'>Films</h2>
    </>
  )
}

export default FilmsPage