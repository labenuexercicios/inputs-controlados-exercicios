import React, { useState } from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = () => {
  const[nome, setNome] = useState()
  const[genero, setGenero] = useState('')
  function onName(event) {
    setNome(event.target.value)
  }
  function onAge(event){
    setGenero(event.target.value)
  }
  
  function click() {
    alert('Parebéns, você se inscreveu com sucesso')
  }
  return (
    <Form>
       Data de Nascimento:
      <Input type="date" id="dataNasc" name="dataNasc"/>
      Digite seu Número:
  <Input type="tel" id="phone" name="phone" placeholder="(61)98362-1234" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
  
  <label>
  Digite seu Gênero:
  <select value={genero} onChange={onAge}>
    <option></option>
    <option>Homem cisgênero</option>
    <option>Mulher cisgênero</option>
    <option>Homem trans</option>
    <option>Mulher trans</option>
    <option>Pessoa não binária</option>
    <option>Prefiro não dizer</option>
  </select>
  </label>
  
  
  
          
          
          
      <button onClick={click}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm