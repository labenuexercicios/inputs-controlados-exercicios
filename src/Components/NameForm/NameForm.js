import React, { useState } from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [email1, setEmail1] = useState("")
  const [date, setDate] =useState("")
  const [telefone, setTelefone] = useState("")
  const [selectValue, setSelectValue] = useState("")
  const list = [
    {id:"Homem Cis", name:'Homem Cis'},
    {id:'Mulher Cis', name:'Mulher Cis'},
    {id:'Homem Trans', name:'Homem Trans'},
    {id:'Mulher Trans', name:'Mulher Trans'},
    {id:"CADÊ O BANHEIRO DOS NÃO BINÁRIO??", name:"Não Binário"},
    {id:"sem definção", name:"sem definição"}
  ]
  
  function onChangeName(event){
    setName(event.target.value)
    console.log(event.target.value)
  }
  function onChangeAge(event){
    setAge(event.target.value)
    console.log(event.target.value)
  }
  function onChangeEmail(event){
    setEmail(event.target.value)
    console.log(event.target.value)
  }
  function onChangeEmail1(event){
    setEmail1(event.target.value)
    console.log(event.target.value)
  }
  function onChangeDate(event){
    setDate(event.target.value)
    console.log(event.target.value)
  }
  function onChangeTelefone(event){
    setTelefone(event.target.value)
    console.log(event.target.value)
  }
  function onChangeDados(event){
    const Dados = {
      name: name,
      age: age,
      email: email,
      email1: email1,
      telefone: telefone,
      data: date,
      gênero: selectValue
    }
    if (Dados.name.length <= 10 || Dados.name.length >= 30 ) {
      console.log("numero gigante ou pequeno demais")
      alert("numero pequeno ou grande demais")
      setName("");
      setAge("");
      setEmail("");
      setEmail1("");
    } if (Dados.age < 18 ) {
      console.log("você é menor de idade")
      alert("você é menor de idade rapaz! VAZA")
      setName("");
      setAge("");
      setEmail("");
      setEmail1("");
    } if (Dados.email !== Dados.email1) {
      alert("Os emails não são iguais")
      setName("");
      setAge("");
      setEmail("");
      setEmail1("");
    } else {
      alert(`Dados cadastrados ${Dados.name}`)
      setName("");
      setAge("");
      setEmail("");
      setEmail1("");
      setAge("")
      setDate("")
      setTelefone("")
      setSelectValue(1)
      console.log(Dados)
    }
  }
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" value={name} onChange={onChangeName}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" value={age} onChange={onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={email} onChange={onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={email1} onChange={onChangeEmail1}/>
        </label>
        <label>
          Data de Nascimento:
          <input placeholder="xx/xx/xxxx" type={"date"} value={date} onChange={onChangeDate}/>
        </label>
        <label>
          Telefone para contado(WPP):
          <input placeholder="(xx) xxxxx xxxx" type={"number"} value={telefone} onChange={onChangeTelefone} /> 
        </label>
        <label>
          Gênero:
          <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        {list.map((item, index) => (
          <option value={item.id}>{item.name}</option>
        ))}
          </select>
        </label>
      <button onClick={onChangeDados}>Enviar dados</button>
      </Form>
  )
}

export default NameForm