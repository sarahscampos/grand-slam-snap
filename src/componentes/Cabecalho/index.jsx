import styled from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 232px;
    }
`;

const Cabecalho = ({setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Logo Grand Slam Snap" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )    
}

export default Cabecalho;