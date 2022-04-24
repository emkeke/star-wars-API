/**
 * Film Page
 */

 import {useEffect, useState } from 'react'
 //import { Link } from 'react-router-dom'
 import StarWarsAPI from '../services/StarWarsAPI'
 
 //import { ListGroup } from 'react-bootstrap/ListGroup'
 import Button from 'react-bootstrap/Button'
 
 const PeoplePage = () => {
   const [people, setPeople] = useState([])
   const [page, setPage] = useState(0)
 
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
      { people && ( 
        <div>
          { people.results.map((char, index) =>
            <div key={index}>
              <p>{char.name}</p>
            </div>
            )
          }
        </div>
      )}   

      <div className="d-flex justify-content-between align-items-center mt-4">
				<div className="prev">
					<Button
					  disabled={page === 0}
						onClick={() => setPage(prevValue => prevValue - 1)}
						variant="primary"
					>Previous Page</Button>
				</div>
				<div className="page">{page + 1}</div>
				<div className="next">
					<Button
						disabled={page + 1 }
						onClick={() => setPage(prevValue => prevValue + 1)}
						variant="primary"
					>Next Page</Button>
				</div>
      </div>  
       
     </>
   )
 }
 

export default PeoplePage