import {
  Container,
  ResponsiveContainer,
  TechEraImg,
  LinkHome,
} from './styledComponents'

const Navbar = () => (
  <Container>
    <ResponsiveContainer>
      <LinkHome to="/">
        <TechEraImg
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </LinkHome>
    </ResponsiveContainer>
  </Container>
)

export default Navbar
