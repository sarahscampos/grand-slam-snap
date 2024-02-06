import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #7B78E6;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://www.instagram.com/sarah_stephany_/" target='_blank'>
                        <img src="/imagens/sociais/instagram.png" alt="logo instagram" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Sarah Campos.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
