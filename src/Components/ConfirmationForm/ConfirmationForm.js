import React, {useState} from 'react'
import { Form, Input} from '../MainPage/styles'



const ConfirmationForm = () => {
  const [data, setData] = useState("")
  const [telefone, setTelefone] = useState("")
  const [genero, setGenero] = useState("")
  const [raca, setRaca] = useState("")
  const [periodo, setPeriodo] = useState("")
  const [escolaridade, setEscolaridade] = useState("")
  const [disponibilidade, setDisponibilidade] = useState("")

  const onChangeData = (event) => {
  setData(event.target.value)
}

const onChangeTelefone = (event) => {
  setTelefone(event.target.value)
}

  const onChangeGenero = (event) => {
  setGenero(event.target.value)
}

const onChangeRaca = (event) => {
  setRaca(event.target.value)
}

const onChangePeriodo = (event) => {
  setPeriodo(event.target.value)
}

const onChangeEscolaridade = (event) => {
  setEscolaridade(event.target.value)
}

const onChangeDisponibilidade = (event) => {
  setDisponibilidade(event.target.value)
}

function enviar() {
  if(data === "" || telefone === "")
  {
    alert("Todos os campos devem ser preenchidos")
  }

}

  return (
    <Form>
      <label>
      Data de nascimento:
      <Input value={data} placeholder = "dd/mm/aaaa" onChange = {onChangeData}/>
      </label>
      <label>
      Número de telefone::
      <Input value={telefone} placeholder = "(xx)xxxx-xxxx" onChange = {onChangeTelefone}/>
      </label>
      <label>
          selecione o gênero que você se declara:
          <select value={genero} onChange={onChangeGenero}>
            <option value="Homem cisgênero">Homem cisgênero</option>
            <option value="Mulher cisgênero">Mulher cisgênero</option>
            <option value="Homem trans">Homem trans</option>
            <option value="Mulher trans">Mulher trans</option>
            <option value="Prefiro não dizer">Prefiro não dizer</option>
          </select>
        </label>
        
        <label>
          selecione a sua cor/raça:
          <select value={raca} onChange={onChangeRaca}>
            <option value="negro">negro</option>
            <option value="branco">branco</option>
            <option value="pardo">pardo</option>
            <option value="indígena">indígena</option>
            <option value="Prefiro não dizer">Prefiro não dizer</option>
          </select>
        </label>
  
          <p>Selecione a modalidade do curso</p>
          <label>
          <input type="radio" name="curso" value = {periodo} onChange = {onChangePeriodo}/>
          <label for="integral">Curso integral web fullstack</label>
          </label>
          <label>
          <input type="radio" name="curso" value={periodo} onChange = {onChangePeriodo}></input>
          <label for="noturno">Curso noturno web fullstack</label>  
          </label>
  

          <p>Selecione o grau de escolaridade</p>
          <label>
          <input type="checkbox" name="escolaridade" value={escolaridade} onChangeE = {onChangeEscolaridade}/>
          <label for="Ensino-medio"> Tenho ensino médio completo</label>
          </label>
          <label>
          <input type="checkbox" name="disponibilidade"  value={disponibilidade} onChange = {onChangeDisponibilidade}/>
          <label for="disponibilidade"> Tenho disponibilidade</label>
          </label>

      <button onClick={enviar}>Enviar dados</button>

      </Form>
  )
}

export default ConfirmationForm