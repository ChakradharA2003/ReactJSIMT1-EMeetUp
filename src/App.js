import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import UserDetailsContext from './Context/UserDetailsContext'
import './App.css'

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

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: topicsList[0].id,
    error: false,
    showErrorMessage: '',
  }

  renderErrorMessage = () => {
    const {name} = this.state
    if (name.length > 0) {
      this.setState({showErrorMessage: '', error: false})
    } else {
      this.setState({showErrorMessage: 'Please enter your name', error: true})
    }
  }

  onClickedRegister = event => {
    event.preventDefault()
    const {name} = this.state
    if (name === '') {
      this.renderErrorMessage()
    } else {
      this.setState(prevState => ({
        isRegistered: !prevState.isRegistered,
      }))
    }
  }

  onChangeName = value => {
    this.setState({name: value, showErrorMessage: ''})
  }

  onChangeTopic = value => {
    this.setState({topic: value})
    console.log(value)
  }

  render() {
    const {isRegistered, name, topic, showErrorMessage, error} = this.state
    return (
      <UserDetailsContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          error,
          showErrorMessage,
          onClickedRegister: this.onClickedRegister,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          renderErrorMessage: this.renderErrorMessage,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </UserDetailsContext.Provider>
    )
  }
}
export default App
