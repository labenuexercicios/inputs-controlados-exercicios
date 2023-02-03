import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={} onChange={}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={} onChange={}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={} onChange={}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={} onChange={}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm