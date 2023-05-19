import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";




function PaginaDoCartao() {
    //declare os estados aqui


    //declare as funções de controle de inputs aqui

    return (
        <LayoutDaPagina>
            {/* Passe as variáveis de estado para o Cartão. Use Props. */}
            <Cartao
                pagamento={"Crédito"}
                numero={"3652 6589 7458 1254"}
                nome={"Luciano Naganawa"}
                cvc={"131"}
                validade={"03/29"}
            />

            {/* Chame o Componente Formulário Aqui */}
            {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}


        </LayoutDaPagina>

    );
}

export default PaginaDoCartao;
