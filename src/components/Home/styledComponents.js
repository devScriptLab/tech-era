import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
`

export const CoursesHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
`

export const CoursesList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0px;
  margin-top: 12px;
`

export const CourseItem = styled.li`
  list-style-type: none;
  width: 45%;
  padding: 12px;
  margin-bottom: 12px;
  @media screen and (min-width: 578px) {
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    width: 18%;
  }
`

export const CourseImage = styled.img`
  width: 45px;
  height: 45px;
`

export const CourseName = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
`

export const CourseLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const LoaderContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 250px;
  height: 250px;
`

export const FailureHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const RetryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const RetryButton = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  height: 35px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
`
