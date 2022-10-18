import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input placeholder="Nome" value={props.name} onChange={props.fName}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={props.age} onChange={props.fAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.fEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.fEmail}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm