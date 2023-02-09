import React from "react";
import { Form, Input } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  console.log(props)
  return (
    <Form>
      <Input placeholder="Data de nascimento" value={props.dataNascimento} onChange={props.onChangeDataNascimento}/>
      <Input placeholder="Telefone" value={props.telefone} onChange={props.onChangeTelefone}/>
      <Input placeholder="Cidade" value={props.cidade} onChange={props.onChangeCidade}/>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;