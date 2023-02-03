import React from "react";
import styled from "styled-components";

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 5px;
`;

const ConfirmationPage = ({ data }) => {
  return (
    <div>
      <h1>Inscrição confirmada!</h1>
      <ContainerData>
        <h3>Dados enviados</h3>
        <p>Nome: {data.name}</p>
        <p>Idade: {data.age}</p>
        <p>E-mail: {data.email}</p>
        <p>Data de Nascimento: {data.dataNascimento}</p>
        <p>Telefone: {data.telefone}</p>
        <p>Cidade: {data.cidade}</p>
      </ContainerData>
    </div>
  );
};

export default ConfirmationPage;
