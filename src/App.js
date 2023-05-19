
import { createGlobalStyle } from 'styled-components'
import { CVC, Cartao, FormaDePagamento, LogoLabenu, LogoMaster, Nome, NumeroDoCartao, PaginaDoCartao, Validade } from './style';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }
`

function App() {
  return (
    <>
      <GlobalStyles />
      <PaginaDoCartao>

        <Cartao>

          <LogoLabenu
            alt="logo da labenu"
            src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/6418d88006d6c5b61efb9e69_Fogo-Cima.svg"
          />

          <NumeroDoCartao>
            3652 6589 7458 1254
          </NumeroDoCartao>

          <Nome>
            Luciano Naganawa
          </Nome>

          <CVC>
            cvc: 131
          </CVC>

          <FormaDePagamento> $ Crédito</FormaDePagamento>

          <Validade>
            validade: 03/29
          </Validade>

          <LogoMaster
            id="logo-master"
            alt="logo da master card"
            src="https://logospng.org/download/mastercard/logo-mastercard-2048.png"
          />

        </Cartao>
        
      </PaginaDoCartao>
    </>
  );
}

export default App;
