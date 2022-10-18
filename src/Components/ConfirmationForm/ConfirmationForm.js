import React, { useState } from 'react'
import FinalPage from '../FinalPage/FinalPage'
import {Form, Input, Label, Input2} from '../MainPage/styles'

const ConfirmationForm = () => {

  const [phone, setPhone] = useState('')
  const [born, setBorn] = useState('')
  const [int, setInt] = useState('')
  const [not, setNot] = useState('')
  const [formFlow, setFormFlow] = useState(1)

  const imutBorn = (e)=>{
    e.preventDefault()
    setBorn(e.target.value)
  }

  const imutPhone= (e) => {
    e.preventDefault()
    setPhone(e.target.value)
  }
  
  const imutInt = (e)=>{
    e.preventDefault()
    setInt(e.target.value)
  }

  
  const imutNot = (e)=>{
    e.preventDefault()
    setNot(e.target.value)
  }

  function sub(){
    console.log(int)

    let rad1 = document.getElementById('int')
    let rad2 = document.getElementById('not')

    if(phone === '' || born === ''){
      alert('Insira as Informações!')
    }else if(rad1.checked === false && rad2.checked === false){
      alert('Insira as Informações!')
    }else{
      setFormFlow(2);
      alert('Inscrição Efetuada :)') 
    }
  }


  return (
    <>
    {formFlow === 1? <Form>
      <label>
        Data Nascimento:
        <Input value={born} onChange = {imutBorn}/>
      </label>
      <label>
        Telefone:
        <Input type='number' value={phone} onChange = {imutPhone}/>
      </label>  

      <label>
        Genêro:
        <select>
          <option value='homem-cis'>Homem Cisgênero</option>
          <option value='mulher-cis'>Mulher Cisgênero</option>
          <option value='homem-trans'>Homem Transgênero</option>
          <option value='mulher-trans'>Mulher Transgênero</option>
          <option value='nao-bin'>Pessoa não binária</option>
          <option value='nao-info'>Prefiro não informar</option>
        </select>
      </label>  

      <label>
        Como você se autodeclara:
        <select>
          <option value=''>Negro</option>
          <option value=''>Branco</option>
          <option value=''>Pardo</option>
          <option value=''>Amarelo</option>
          <option value=''>Indígena</option>
          <option value=''>Prefiro não informar</option>
        </select>
      </label>  <br/>

      <Label>
        <Input2 type='radio' id='int' name='curso' value={int} onChange={imutInt}/>Curso Integral web fullstack <br/>
        <Input2 type='radio' id='not' name='curso' value={not} onChange={imutNot}/>Curso Noturno web fullstack
      </Label>  

      <button onClick={sub} onChange={sub}>Enviar dados</button>
    </Form> : <FinalPage/>}

    </>
  )
}

export default ConfirmationForm