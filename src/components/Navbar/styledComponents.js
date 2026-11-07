import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled.nav`
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
`

export const TechEraImg = styled.img`
  width: 100px;
  height: 40px;
`

export const LinkHome = styled(Link)`
  text-decoration: none;
`
