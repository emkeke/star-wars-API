/**
 * Character page
 */

import {useEffect, useState } from 'react'
import StarWarsAPI from '../services/StarWarsAPI'
import getIdFromUrl from '../helpers/index'
import { useParams } from 'react-router-dom'

 
const CharacterPage = () => {
  const [character, setCharacter] = useState()
  const { id } = useParams()

  const getCharacter = async (id) =>{
    const res = await StarWarsAPI.getCharacter(id)
    setCharacter(res)
    
  }

  useEffect(() => {
    getCharacter(id)
  }, [id])

  console.log(character)

  return (
    <>
      {character &&
      <div><h2 className='text-center'>{character.name} details</h2></div>
      }
        

    </>
  )
}
 
export default CharacterPage