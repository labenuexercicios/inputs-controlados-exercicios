import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

const MainPage = () => {
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  //3.1 crie aqui os estados para o form do exercício 3

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  //3.2 Crie aqui as funções de onChange do exercício 3

  const sendData = () => {
    setFormFlow(2);
  };

  const sendForm = () => {
    setFormFlow(3);
  };

  const mudarPagina = () => {
    if (formFlow === 1) {
      return (
        <NameForm
          name={name}
          age={age}
          email={email}
          onChangeName={onChangeName}
          onChangeEmail={onChangeEmail}
          onChangeAge={onChangeAge}
          sendData={sendData}
        />
      );
    } else if (formFlow === 2) {
      return (
        <ConfirmationForm
          sendForm={sendForm}
          //3.3 passe as props do exercicio 3 aqui
        />
      );
    } else {
      return <ConfirmationPage />;
    }
  };

  return <MainContainer>{mudarPagina()}</MainContainer>;
};

export default MainPage;
