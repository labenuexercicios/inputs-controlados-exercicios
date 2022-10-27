import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    // PERGUNTAR
    parseInt(event.target.value) ? setAge(event.target.value) : setAge("");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeEmailValidation = (event) => {
    setEmailValidation(event.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      console.log('enter')
      sendData()
    }
  };

  const sendData = () => {
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
    if (
      age >= 18 &&
      name.length > 0 &&
      name.length <= 30 &&
      email.includes("@gmail.com") &&
      email === emailValidation
    ) {
      setFormFlow(2);
    }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          nome={name}
          onChangeName={onChangeName}
          age={age}
          onChangeAge={onChangeAge}
          email={email}
          onChangeEmail={onChangeEmail}
          emailValidation={emailValidation}
          onChangeEmailValidation={onChangeEmailValidation}
          sendData={sendData}
          handleKeyDown={handleKeyDown}
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;
