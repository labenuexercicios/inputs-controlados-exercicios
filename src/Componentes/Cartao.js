import { CVC, DesignDoCartao, FormaDePagamento, LogoLabenu, LogoMasterCard, Nome, NumeroDoCartao, Validade } from "./estiloDoCartao";



function Cartao(props) {
    return (
        <DesignDoCartao>

            <LogoLabenu
                alt="logo da labenu"
                src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/6418d88006d6c5b61efb9e69_Fogo-Cima.svg"
            />

            <NumeroDoCartao>
                {props.numero}
                
            </NumeroDoCartao>

            <Nome>
                {props.nome}
            </Nome>

            <CVC>
                cvc:{props.cvc}
            </CVC>

            <FormaDePagamento> $ {props.pagamento}</FormaDePagamento>

            <Validade>
                validade: {props.validade}
            </Validade>

            <LogoMasterCard
                id="logo-master"
                alt="logo da master card"
                src="https://logospng.org/download/mastercard/logo-mastercard-2048.png"
            />

        </DesignDoCartao>
    );
}

export default Cartao;
