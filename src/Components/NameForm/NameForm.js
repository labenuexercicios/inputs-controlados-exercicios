import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = ({name, age, email,email2, onChangeName, onChangeAge, onChangeEmail, sendData, onChangeEmail2}) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Digite seu nome" value={name} onChange={onChangeName} type = "text" minLength={10} maxLength={30}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Digite sua idade" value={age} onChange={onChangeAge} type = "number" />
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail} type ="email"/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="repita o e-mail" value={email2} onChange={onChangeEmail2} type = "email"/>
        </label>
      <button onClick={sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm