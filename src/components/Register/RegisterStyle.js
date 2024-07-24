import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RegisterContainer = styled.div`
  background-color: transparent;
  height: 60%;
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 40px;
`
export const RegisterImage = styled.img`
  height: 50%;
  width: 60%;
`
export const RegisterInputDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RegisterHeading = styled.h1`
  color: #7b8794;
  font-family: 'Roboto';
  font-size: 35px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px 10px 0px;
`
export const LabelElement = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
`
export const InputElement = styled.input`
  background-color: transparent;
  border: 1px solid #7b8794;
  outline: none;
  border-radius: 10px;
  width: 300px;
  padding: 10px 10px 10px 15px;
  margin-top: 3px;
`
export const Select = styled.select`
  background-color: transparent;
  border: 1px solid #7b8794;
  outline: none;
  border-radius: 10px;
  width: 300px;
  padding: 10px 10px 10px 15px;
  margin-top: 3px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 25px 10px 25px;
  font-size: 20px;
  border-width: 0px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-start;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  font-family: 'Roboto';
  align-self: flex-start;
`
