import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import UserDetailsContext from '../../Context/UserDetailsContext'
import {
  HomeContainer,
  WelcomeToRegisterContainer,
  WelcomeHeading,
  WelcomeDescription,
  RegisterButton,
  WebsiteRegisterImage,
  WelcomeUser,
  UserName,
  UserTopic,
} from './HomeStyle'

const Home = props => (
  <UserDetailsContext.Consumer>
    {value => {
      const {name, topic} = value
      const renderView =
        name.length !== 0 ? (
          <WelcomeUser>
            <UserName>Hello {name}</UserName>
            <UserTopic>Welcome to {topic}</UserTopic>
          </WelcomeUser>
        ) : (
          <WelcomeToRegisterContainer>
            <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
            <WelcomeDescription>
              Please Register for the topic
            </WelcomeDescription>
            <Link to="/register">
              <RegisterButton type="button">Register</RegisterButton>
            </Link>
          </WelcomeToRegisterContainer>
        )
      return (
        <div>
          <Header />
          <HomeContainer>
            {renderView}
            <WebsiteRegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </div>
      )
    }}
  </UserDetailsContext.Consumer>
)
export default withRouter(Home)
