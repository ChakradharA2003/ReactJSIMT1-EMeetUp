import React from 'react'

const UserDetailsContext = React.createContext({
  isRegistered: false,
  onClickedRegister: () => {},
  name: '',
  onChangeName: () => {},
  topic: '',
  onChangeTopic: () => {},
  errorMessage: '',
  renderErrorMessage: () => {},
  error: false,
})
export default UserDetailsContext
