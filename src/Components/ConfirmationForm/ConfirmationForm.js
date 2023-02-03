import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  return (
    <Form>
      <input placeholder="Data de nascimento"/>
      <input placeholder="Telefone"/>
      <input placeholder="Cidade"/>
      <button onClick={props.sendForm}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;