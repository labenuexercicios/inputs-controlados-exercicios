import React from 'react'
import { Form, Input, Select} from '../MainPage/styles'

const ConfirmationForm = ({setFormFlow}) => {

  function confirmavalores(){
    if(document.getElementById("data").value == ""){
      alert('Por favor, preencha o campo data');
    }
    if(document.getElementById("telefone").value == ""){
      alert('Por favor, preencha o campo telefone');
    }
    if(document.getElementById("raca-select").value == ""){
      alert('Por favor, preencha o campo raca');
    }
    else{
      alert("Valeu patrao deu td certo!")
    }
  }
function Voltapagina(){
  setFormFlow(1)
}

  return (
    <Form>
        <label>
          Data de nascimento:
          <Input  placeholder="Digite sua data de nascimento" type = "date" id='data'/>
        </label>
        <label>
          Telefone:
          <Input  placeholder="Digite seu telefone" type = "number" maxLength={11} id='telefone'/>
        </label>
        <label for = "identifica-select">
          Escolha:
        </label>
        <Select name="identifica" id="identifica-select">
        <option value="">--Selecione uma opcao--</option>
        <option value="negro">Negro</option>
        <option value="branco">Branco</option>
        <option value="pardo">Pardo</option>
        <option value="amarelo">Amarelo</option>
        <option value="indigena">Indigena</option>
        <option value="prefironaodizer">Prefiro não dizer</option>
        </Select>
      <button onClick={confirmavalores} >Enviar dados</button>
      <button onClick={Voltapagina}>Voltar</button>
      </Form>
  )
}

export default ConfirmationForm