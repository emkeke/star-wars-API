/**
 * Film Page
 */

 import {useEffect, useState } from 'react'
 //import { Link } from 'react-router-dom'
 import StarWarsAPI from '../services/StarWarsAPI'
 
 //import { ListGroup } from 'react-bootstrap/ListGroup'
 //import Button from 'react-bootstrap/Button'
 
 const PeoplePage = () => {
   const [people, setPeople] = useState([])
 
   const getPeople = async () => {
     //Get the films from the API
    const data = await StarWarsAPI.getPeople()
    setPeople(data)
 
    console.log(data)
 
   }
 
   useEffect(() => {
     getPeople()
   }, [])
 
   return (
     <>
       <h2 className='text-center'>Start Wars Characters</h2>
     </>
   )
 }
 

export default PeoplePage