import Image from 'react-bootstrap/Image'
import SadKittyCat from '../assets/images/c3po.gif'

import Row from 'react-bootstrap/Row'


const NotFound = () => {
	return (
		<>
			<h1 id='not-found' className='text-center text-yellow'>Whoops! Page could not be found</h1>

			<Row className="justify-content-md-center">
       			<Image src={SadKittyCat} fluid />
			</Row>
		</>
	)
}

export default NotFound
