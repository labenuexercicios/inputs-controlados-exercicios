# Inputs Controlados

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar uma estrutura para trabalharmos com diferentes tipos de input! :) 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/inputs-controlados-exercicios-b8ejl1

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# **Observação: A aplicação não vai funcionar até você finalizar o exercício 2!**

# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo.

Você **não precisa responder às questões abaixo dentro de seu projeto**, mas é importante que leia o projeto e reflita sobre os questionamentos antes de prosseguir.

- Observe o `App.js`, o que você consegue visualizar que já conhece? 
- Entende o `<GlobalStyles/>`?
- Analize os componentes dentro do App.js, quantos e quais componentes estão sendo chamados aqui?
- Agora analize o `JSX` de cada um desses componentes.
- Você vai perceber que o componente `MainPage` é o componente principal do projeto. É lá onde está armazenado os componentes `NameForm` e `ConfirmationForm`. 
- Agora analize o componente `NameForm`. Aqui você deverá concluir o controle dos inputs.
- O componente `ConfirmationForm` está incompleto. Seu trabalho será criar os estados e funções onChange na `MainPage`, passar o que for necessário por props para esse componente e administrar o controle dos inputs.


# Exercício 2

## **A aplicação estará quebrada antes de implementar esse exercício! Não se preocupe, o exercício foi criado assim mesmo!**

Agora vamos incrementar o formulário que trabalhamos em aula, que agora é o componente `NameForm`.
Ele é uma versão componentizada do exercício da aula ao vivo. Perceba que as props já foram passadas pra esse componente, você terá apenas que passar os valores corretamente para os inputs (`value` e `onChange`).


# Exercício 3

Agora que os requisitos da etapa anterior foram atendidos, você precisa controlar os inputs do próximo formulário do zero.  

- Crie os estados dataNascimento, telefone e cidade.
- Crie funções onChange para cada um dos 3 estados criados.
- Passe os estados e funções por props para o componente `ConfirmationForm`.
- Abra o componente `ConfirmationForm.js`.
- Aplique os valores recebidos por props para cada input (`value`e `onChange`).
- Agora você pode testar a aplicação até o final e verificar os dados que foram capturados pelos inputs controlados nos 2 formulários! 😀
