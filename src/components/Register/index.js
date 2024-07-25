import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Header from '../Header'

import UserDetailsContext from '../../Context/UserDetailsContext'

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
  onSubmitForm = event => {
    event.preventDefault()
    const {history} = this.props
    history.replace('/')
    return (
      <UserDetailsContext.Consumer>
        {value => {
          const {onClickedRegister} = value
          return onClickedRegister()
        }}
      </UserDetailsContext.Consumer>
    )
  }

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
                  <RegisterInputDetails as="form" onSubmit={this.onSubmitForm}>
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
                      <LabelElement htmlFor="topic">TOPIC</LabelElement>
                      <Select
                        as="select"
                        id="topic"
                        value={topic}
                        onChange={event => onChangeTopic(event.target.value)}
                      >
                        {topicsList.map(top => (
                          <option key={top.id} value={top.displayText}>
                            {top.displayText}
                          </option>
                        ))}
                      </Select>
                    </InputContainer>
                    <RegisterButton
                      type="submit"
                      onClick={() => onClickedRegister()}
                    >
                      Register
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
