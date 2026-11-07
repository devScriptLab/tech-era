import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'

import {
  Container,
  ResponsiveContainer,
  CoursesHeading,
  CoursesList,
  CourseItem,
  CourseImage,
  CourseName,
  CourseLink,
  LoaderContainer,
  FailureViewContainer,
  FailureHeading,
  FailureDescription,
  FailureImage,
  RetryButtonContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.failure,
    coursesList: [],
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      'Content-Type': 'application/json',
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.courses.map(eachObject => ({
        id: eachObject.id,
        logoUrl: eachObject.logo_url,
        name: eachObject.name,
      }))

      this.setState({
        coursesList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCoursesList = () => {
    const {coursesList} = this.state

    return (
      <>
        <CoursesHeading>Courses</CoursesHeading>
        <CoursesList>
          {coursesList.map(eachCourse => (
            <CourseItem key={eachCourse.id}>
              <CourseLink to={`/courses/${eachCourse.id}`}>
                <CourseImage src={eachCourse.logoUrl} alt={eachCourse.name} />
                <CourseName>{eachCourse.name}</CourseName>
              </CourseLink>
            </CourseItem>
          ))}
        </CoursesList>
      </>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </LoaderContainer>
  )

  onRetryHome = () => this.getCourseDetails()

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for
      </FailureDescription>
      <RetryButtonContainer>
        <RetryButton type="button" onClick={this.onRetryHome}>
          Retry
        </RetryButton>
      </RetryButtonContainer>
    </FailureViewContainer>
  )

  renderViewsBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesList()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <ResponsiveContainer>
            {this.renderViewsBasedOnAPIStatus()}
          </ResponsiveContainer>
        </Container>
      </>
    )
  }
}

export default Home
