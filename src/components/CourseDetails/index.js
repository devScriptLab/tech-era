import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'

import {
  Container,
  ResponsiveContainer,
  CourseImageContainer,
  CourseImage,
  CourseDetailsContainer,
  CourseName,
  CourseDescription,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButtonContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CourseDetails extends Component {
  state = {
    courseDetails: {},
    apiStatus: apiStatusConstants.failure,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      'Content-Type': 'application/json',
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = {
        id: fetchedData.course_details.id,
        name: fetchedData.course_details.name,
        description: fetchedData.course_details.description,
        imageUrl: fetchedData.course_details.image_url,
      }

      this.setState({
        courseDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCourseDetails = () => {
    const {courseDetails} = this.state
    const {name, description, imageUrl} = courseDetails

    return (
      <ResponsiveContainer>
        <CourseImageContainer>
          <CourseImage src={imageUrl} alt={name} />
        </CourseImageContainer>
        <CourseDetailsContainer>
          <CourseName>{name}</CourseName>
          <CourseDescription>{description}</CourseDescription>
        </CourseDetailsContainer>
      </ResponsiveContainer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </LoaderContainer>
  )

  onRetryCourseDetails = () => this.getCourseDetails()

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
        <RetryButton type="button" onClick={this.onRetryCourseDetails}>
          Retry
        </RetryButton>
      </RetryButtonContainer>
    </FailureViewContainer>
  )

  renderViewBasedOnAPIStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCourseDetails()
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
        <Container>{this.renderViewBasedOnAPIStatus()}</Container>
      </>
    )
  }
}

export default CourseDetails
