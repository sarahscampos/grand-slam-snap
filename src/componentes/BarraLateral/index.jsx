import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

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
                    <ItemNavegacao 
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo
                    >
                        Início
                    </ItemNavegacao> 
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao> 
                    <ItemNavegacao 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                    >
                        Mais curtidas
                    </ItemNavegacao> 
                    <ItemNavegacao 
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao> 
                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao> 
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;