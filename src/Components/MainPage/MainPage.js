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

const onChangeEmail2 = (event) => {
  setEmail(event.target.value)
}

function sendData(props) {
 if(age>=18 && email.length>=10 && name.length>=6 && email === email){
  const macaco = {
    nome: name,
    idade: age,
    email: email
  }
  console.log(macaco)
  setName('')
  setAge('')
  setEmail('')
  setFormFlow(2)
 }else{
  alert('Você não pode se inscrever')
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
     name={name}
     age={age}
     email1={email1}
     email2={email2}
     onChangeName={onChangeName}
     onChangeAge={onChangeAge}
     onChangeEmail1={onChangeEmail1}
     onChangeEmail2={onChangeEmail2}
     sendData={sendData}
     setFormFlow={setFormFlow}
      /> : <ConfirmationForm 
      date={date}
      number={number}
      gender={gender}
      onChangeDate={onChangeDate}
      />}
    </MainContainer>

      
      

export default MainPage