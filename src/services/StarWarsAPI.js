/***
 * Star Wars API
 */

import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api'

//const sleep = async delay => new Promise(r => setTimeout(r, delay)) 


/** 
 * Films 
 */

const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

/** 
 * People
 */

 const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    return res.data
}

/** 
 * Specific Character
 */

const getCharacter = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}

/** 
 * Specific Film
 */

 const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFilms,
    getPeople,
    getCharacter,
    getFilm,
}
