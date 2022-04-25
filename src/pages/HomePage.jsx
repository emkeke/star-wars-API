import StarWarsImg from '../assets/images/star-wars-front-img.jpeg'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'


const HomePage = () => {
	return (
		<>
			<h1 className='text-center'>Star Wars Wikipedia</h1>

			<Row className="justify-content-md-center">
       			<Image src={StarWarsImg} fluid />
			</Row>
		</>
	)
}

export default HomePage
