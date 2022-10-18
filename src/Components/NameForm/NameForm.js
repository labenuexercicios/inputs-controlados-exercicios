import React from 'react'
import { Form, Input} from '../MainPage/styles'
import MainPage from '../MainPage/MainPage'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  type={'text'} placeholder="Nome" value={props.name} onChange={props.onChangeName}/>
        </label>
        <label>
          Idade:
          <Input type={'number'} Input  placeholder="Idade" value={props.age} onChange={props.onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  type={'email'} placeholder="usuario@usuario.com" value={props.email1} onChange={props.onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  type={'email'} placeholder="usuario@usuario.com" value={props.email2} onChange={props.onChangeEmail2}/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm