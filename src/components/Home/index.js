import {Link} from 'react-router-dom'
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

const Home = () => (
  <UserDetailsContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value
      console.log(isRegistered)
      const renderView = isRegistered ? (
        <WelcomeUser>
          <UserName>Hello {name}</UserName>
          <UserTopic>Welcome to {topic}</UserTopic>
        </WelcomeUser>
      ) : (
        <WelcomeToRegisterContainer>
          <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
          <WelcomeDescription>Please Register for the topic</WelcomeDescription>
          <Link to="/register">
            <RegisterButton>Register</RegisterButton>
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
export default Home
