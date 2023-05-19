
import styled from "styled-components";

export const DesignDoCartao = styled.div `
    background-image: linear-gradient(to right, orange, orangered);
    opacity: 0.8;
    box-shadow: 2px 2px 10px;
    width: 410px;
    height: 260px;
    border-radius: 30px;

    display: grid;
    grid-template-rows: 2fr 1fr;
    padding: 30px;
    position: relative;
    margin: 20px 0px 30px 0px;
    opacity: 1;
`
export const LogoLabenu = styled.img `
    position: absolute;
    width: 210px;
    justify-self: right;
    opacity: 0.15; 
`
export const LogoMasterCard = styled.img `
    width: 80px;
    justify-self: right;
    position: absolute;
    bottom: 0;
    margin: 15px;
`

export const InfoDoCartao = styled.p `
    color: white;
    grid-column: 1;
    grid-row: 2/3;
`
export const NumeroDoCartao = styled(InfoDoCartao) `
font-size: 2rem;
`
export const TamanhoDoTexto = styled(InfoDoCartao)`
    font-size: 1.1rem;
    
`
export const Nome = styled(TamanhoDoTexto) `
    margin-top: 50px;
`
export const CVC = styled(TamanhoDoTexto) `
    margin-top: 80px;
`
export const Validade = styled(TamanhoDoTexto)`
     margin-top: 110px;
    
`
export const FormaDePagamento = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
`
 
  