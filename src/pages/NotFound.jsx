import Image from 'react-bootstrap/Image'
import SadKittyCat from '../assets/images/NotFound.jpeg'

const NotFound = () => {
	return (
		<>
			<h1>Whoops! Page could not be found</h1>
			<Image src={SadKittyCat} fluid />
		</>
	)
}

export default NotFound
