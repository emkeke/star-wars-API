/**
 * Character page
 */

import {useEffect, useState } from 'react'
import StarWarsAPI from '../services/StarWarsAPI'
//import StarWarsAPI from '../services/StarWarsAPI'
//import getIdFromUrl from '../helpers/index'

 
const CharacterPage = () => {
  const [character, setCharacter] = useState()

  const getCharacter = async () =>{
    const data = await StarWarsAPI.getCharacter()
    setCharacter(data)
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <div>CharacterPage</div>
  )
}
 
export default CharacterPage