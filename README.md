# Inputs Controlados

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar uma estrutura para trabalharmos com diferentes tipos de input! :) 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: 

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# **Observação: A aplicação não vai funcionar até você finalizar a passagem de props no exercício 2!**

# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo. 

- Observe o `App.js`, o que você consegue visualizar que já conhece? 
- Entende o `<GlobalStyles/>`?
- Analize os componentes dentro do App.js, quantos e quais componentes estão sendo chamados aqui?

- Agora analize o `JSX` de cada um desses componentes.
- Você vai perceber que o componente `MainPage` é o componente principal do projeto. É lá onde está armazenado os componentes `NameForm` e `ConfirmationForm`. 
- Foi criada uma lógica de renderização na linha 39 que vai ser usada por você nos próximos exercícios. Você não precisa entender 100% como ela funciona por enquanto.
- Agora analize o componente `NameForm`. Ele é uma versão componentizada do exercício de hoje de manhã durante a aula. Perceba que, agora, ele precisa receber `props` para funcionar corretamente.
- O componente `ConfirmationForm` está incompleto. Seu trabalho será criar esse componente e administrar o controle dos inputs que serão pedidos a seguir.


# Exercício 2

Agora vamos incrementar o formulário que trabalhamos hoje de manhã, que agora é o componente `NameForm`, com uma prática muito comum no desenvolvimento Front-end: **verificações**. 
## **Antes disso, passe as props corretamente do componente `MainPage.js` para o componente `NameForm.js`, caso contrário, a aplicação não vai funcionar!**
O seu trabalho agora é garantir que o usuário está inserindo corretamente as informações que você precisa. Para isso, siga os seguintes passos e requisitos:

- A pessoa estudante só pode se inscrever na Labenu se for maior de idade
- O input de nome precisa ter no mínimo 10 caracteres e no máximo 30.
- Verifique se o e-mail está no formato correto: usuario@usuario.com
- Crie um novo input de confirmação de email. Caso os dois inputs estejam com conteúdo iguais, o usuário pode seguir pra próxima etapa. 
- Todos os campos são obrigatórios.

Atenção: A lógica de avançar para a próxima etapa do formulário deve funcionar apenas SE todos os requisitos forem atendidos. Caso contrário, uma mensagem de `alert()` deve aparecer para o usuário indicando que ele não respondeu o formulário corretamente.

# Exercício 3

Agora que os requisitos da etapa anterior foram atendidos, você precisa criar os inputs do próximo formulário do zero. Além disso, você também precisa controlar todos esses inputs e verificar se os dados atendem os requisitos para finalizar a inscrição da pessoa estudante. 

Para este formulário você vai precisar: 

- Criar um input onde seja possível inserir a data de nascimento da pessoa.
- Criar um input onde seja possível inserir o número de telefone da pessoa.
- Criar um input do tipo dropdown onde a pessoa possa escolher um gênero entre as seguintes opções: **Homem cisgênero, Mulher cisgênero, Homem trans, Mulher trans, Pessoa não binária, Prefiro não dizer**.
- Criar um input do tipo dropdown onde a pessoa possa escolher como se autodeclara: Negro, branco, pardo, amarelo, indígena ou prefiro não dizer.
- Criar 2 inputs do tipo `radio` onde a pessoa possa escolher apenas uma opção entre as duas: Curso integral web fullstack ou Curso noturno web fullstack (pode dar uma olhada aqui: https://www.w3schools.com/tags/att_input_type_radio.asp)
- Criar 2 inputs do tipo `checkbox` onde a pessoa confirma que: Tem ensino médio completo e Tem disponibilidade para participar das atividades. (Pode dar uma olhada aqui: https://www.w3schools.com/tags/att_input_type_checkbox.asp)


Quando tudo estiver finalizado, crie uma função de `onClick` no botão `Enviar dados` do componente `ConfirmationForm` que limpa os inputs e confirma para o usuário através de um `alert()` que a inscrição foi finalizada. Isso só pode acontecer se todos os campos forem preenchidos.

Atenção: Só deve ser possível selecionar uma única opção nos inputs de drowdown para gênero e autodeclaração de cor.
