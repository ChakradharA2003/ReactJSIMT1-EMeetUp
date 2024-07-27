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

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = () => (
  <UserDetailsContext.Consumer>
    {value => {
      const {name, topic, isRegistered} = value
      console.log(isRegistered)
      const text = topicsList.filter(top => top.id === topic)
      console.log(text[0].displayText)
      const renderView = isRegistered ? (
        <WelcomeUser>
          <UserName>Hello {name}</UserName>
          <UserTopic>Welcome to {text[0].displayText}</UserTopic>
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
