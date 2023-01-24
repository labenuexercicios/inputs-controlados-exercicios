import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {

//Cria as var q vai passar

const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [email2, setEmail2] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

//cria as funcao q vao alterar

function onChangeName(event){
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
  if(age >= 18){
    console.log("fala patrao vc e d maior")
  }
}

function onChangeEmail(event)  {
  setEmail(event.target.value)
}
function onChangeEmail2(event)  {
  setEmail2(event.target.value)
}

//condicional dos sites

const sendData = () => {
    if(age < 18){
      alert("Infelizmente você ainda não tem idade suficiente.");
      setName("")
      setAge("")
      setEmail("")
      setEmail2("")
    }
    if(email !== email2){
      alert("Infelizmente os e-mails não foram digitados iguais, tente novamente.");
      setEmail("")
      setEmail2("")
    }
    if(name.length <10 || name.length > 30){
      alert("Fala patrao, min de caracter do seu nome é 10 e maximo 30, redigita ai pra nois.")
      setName("")
    }
    if(name === "" || age === "" || email === "" || email2 === "" || name.length <10 || name.length > 30){
      alert("Falta preencher algo, tente novamente.")
    }
    else{
      setFormFlow(2)
    }


  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
}

//passa os valores pro nameform e pro confirmationform

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name = {name}
      age = {age}
      email = {email}
      email2 = {email2}
      onChangeName = {onChangeName}
      onChangeAge = {onChangeAge}
      onChangeEmail = {onChangeEmail}
      onChangeEmail2 = {onChangeEmail2}
      sendData = {sendData}
      // insira aqui suas props
      /> : <ConfirmationForm 
      setFormFlow = {setFormFlow}/>}
    </MainContainer>
  )
}

export default MainPage