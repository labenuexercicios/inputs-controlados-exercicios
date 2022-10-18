import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirma, setEmailConfirma] = useState("")
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

const onChangeEmailConfirma = (event) => {
  setEmailConfirma(event.target.value)
}

const sendData = () => {
        //verificar se algum campo ficou em branco
        if(name === "" || age === "" || email === "" || emailConfirma === "")
        {
          alert("Todos os campos são obrigatórios")
        }
        //verifica idade
        else if(age < 18)
        {
            alert("você precisa ter 18 anos ou mais para se cadastrar")
        }
    
        //verifica email
        else if(name.length <10 || name.length >30)
        {
          alert("o noma deve ter entre 10 e 30 caracteres")
        }
    
        //verifica email:
        else if(email.slice(-12) !== "@usuario.com")
        {
          console.log(email.slice(-19))
          alert("domínio do email inválido, deve ser no formato usuario@usuario.com")
        }

        //verificar se o email foi confirmado
        else if(email !== emailConfirma)
        {
          alert("confirmação do email não confere")
        }

        else
        {
        //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
        setFormFlow(2)
        }
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name = {name} 
      onChangeName = {onChangeName}
      age = {age} 
      onChangeAge = {onChangeAge}
      email = {email} 
      onChangeEmail = {onChangeEmail}
      emailConfirma = {emailConfirma} 
      onChangeEmailConfirma = {onChangeEmailConfirma}
      sendData = {sendData}
      // insira aqui suas props
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage