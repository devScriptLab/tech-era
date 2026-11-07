import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding-top: 58px;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1110px;
  box-shadow: 0px 0px 12px 8px #f4f4f4;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const CourseImageContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 35%;
    height: 380px;
  }
`

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

export const CourseDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 21px;
  @media screen and (min-width: 768px) {
    width: 65%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const CourseName = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0px;
`

export const CourseDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 2;
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
