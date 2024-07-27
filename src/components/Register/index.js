import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../Header'

import UserDetailsContext from '../../Context/UserDetailsContext'
import './index.css'

import {
  MainContainer,
  RegisterContainer,
  RegisterImage,
  RegisterInputDetails,
  RegisterHeading,
  InputContainer,
  LabelElement,
  InputElement,
  Select,
  RegisterButton,
  ErrorMessage,
} from './RegisterStyle'

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

class Register extends Component {
  render() {
    return (
      <UserDetailsContext.Consumer>
        {value => {
          const {
            name,
            topic,
            onChangeName,
            onChangeTopic,
            onClickedRegister,
            error,
            showErrorMessage,
          } = value
          return (
            <div>
              <Header />
              <MainContainer>
                <RegisterContainer>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <RegisterInputDetails as="form" onSubmit={onClickedRegister}>
                    <RegisterHeading>Let us join</RegisterHeading>
                    <InputContainer>
                      <LabelElement htmlFor="name">NAME</LabelElement>
                      <InputElement
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={event => onChangeName(event.target.value)}
                      />
                    </InputContainer>
                    <InputContainer>
                      <LabelElement htmlFor="topic">TOPICS</LabelElement>
                      <select
                        id="topic"
                        className="select-style"
                        value={topic}
                        onChange={event => onChangeTopic(event.target.value)}
                      >
                        {topicsList.map(top => (
                          <option key={top.id} value={top.id}>
                            {top.displayText}
                          </option>
                        ))}
                      </select>
                    </InputContainer>
                    <RegisterButton type="submit" onClick={onClickedRegister}>
                      Register Now
                    </RegisterButton>
                    {error && <ErrorMessage>{showErrorMessage}</ErrorMessage>}
                  </RegisterInputDetails>
                </RegisterContainer>
              </MainContainer>
            </div>
          )
        }}
      </UserDetailsContext.Consumer>
    )
  }
}
export default withRouter(Register)

/*

*/
