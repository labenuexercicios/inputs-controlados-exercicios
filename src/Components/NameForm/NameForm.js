import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  console.log(props)
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={props.nome} onChange={props.onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.idade} onChange={props.onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm