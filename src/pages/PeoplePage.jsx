/**
 * Film Page
 */

 import {useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
 import StarWarsAPI from '../services/StarWarsAPI'
 
 //import { ListGroup } from 'react-bootstrap/ListGroup'
 import Button from 'react-bootstrap/Button'
 
 const PeoplePage = () => {
   const [people, setPeople] = useState()
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
       {/* Logical && => shows up when its true */}

       { people && ( 
        <div className="d-flex flex-wrap mt-4">
          { people.results.map((char, index) =>
            <div className='w-50'>
              <div className='card m-2'>
                <div key={index}>
                  <h5 className='text-center mt-2'>{char.name}</h5>
                  <div className='card-text p-2'>
                    <p>Gender: {char.gender}</p>
                    <p>Born: {char.birth_year}</p>
                    <p>In: {char.films.length} films</p>
                  </div>
                  <Button className='m-3' as={Link} to={`/people/${index}`}>Read more..</Button>
                  {/* <Link to={`/people/${index + 1}`} type="button" className='btn'></Link> */}
                </div>
              </div>
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