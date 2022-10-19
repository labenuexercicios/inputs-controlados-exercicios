import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  type={'text'} placeholder="Nome" value={props.name} onChange={props.onChangeName}/>
        </label>
        <label>
          Idade:
          <Input type={'number'}  placeholder="Idade" value={props.age} onChange={props.onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  type={'email'} placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  type={'email'} placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm