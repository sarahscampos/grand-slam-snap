import styled from "styled-components";

const ListaEstilizada = styled.ul` //tag html que esse componente representa
    padding: 0;
    list-style: none;
    margin: 0;
    width: 232px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <li>
                        <a href="">Início</a>
                    </li>
                    <li>
                        <a href="">Mais vistas</a>
                    </li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;