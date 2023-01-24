import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const sendData = () => {
  let namLen = name.length
  let ageLen = Number(age)
  
  if(namLen < 10 || namLen > 30 ){
    alert('Insira outro nome');
  }else if(ageLen < 18){
    alert('Apenas os maiores de idades podem efetuar a inscrição!')
  }else if(email.includes('@') == false || email.length < 1){
    alert('Email Inválido!')
  }else{
    setFormFlow(2) 
  }
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name = {name} 
      email = {email} 
      age = {age} 
      fName = {onChangeName}
      fAge = {onChangeAge}
      fEmail = {onChangeEmail}
      sendData = {sendData}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage