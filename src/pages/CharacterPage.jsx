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
        <div className='card'>
          <h2 id='title-char' className='text-center p-4'>{character.name}</h2>
          <div className='p-2'>
            <p>Gender: {character.gender}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair color: {character.hair_color}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>Eye color: {character.eye_color}</p>
          </div>
        </div>
      }
        

    </>
  )
}
 
export default CharacterPage