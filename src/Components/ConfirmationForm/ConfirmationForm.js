import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = () => {
  return (
    <Form><label>


    </label>
        
      <button>Enviar dados</button>
      </Form>
  )
}

return (
  <form><label>
    Data de Nascimento:
    <Input type="date" id="phone" name="phone" placeholder='(16)99876-5432' pattern='[0-9]{3}-[0-9]{2}'
  </label>
)

Digite seu Gênero:
<select value={genero} onChance={onAge}>
<option>Homem cisgênero</option>
<option>Mulher cisgênero</option>
<option>Homem trans</option>
<option>Mulher trans</option>
<option>Pessoa não binária</option>
<option>Prefiro não dizer</option>

</select>
</label>

export default ConfirmationForm