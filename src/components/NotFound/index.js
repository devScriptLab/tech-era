import Navbar from '../Navbar'

import {
  Container,
  ResponsiveContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <>
    <Navbar />
    <Container>
      <ResponsiveContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <Heading>Page Not Found</Heading>
        <Description>
          We are sorry, the page you requested could not be found
        </Description>
      </ResponsiveContainer>
    </Container>
  </>
)

export default NotFound
