/***
 * 
 * Star Wars API
 */

import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

/**
 * 
 * Star Wars Films 
 * Query & Pages
 */
const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}


/**
 * 
 * Star Wars Characters 
 * Query & Pages
 */
 const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFilms,
    getPeople
}