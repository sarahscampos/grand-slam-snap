import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from '/imagens/banner.png'
import Galeria from "./componentes/Galeria";
// na interpolação de string é onde vai o código css
const FundoGradiente = styled.div`
  background-color: #0a0a0a;
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto; //A width está definida quando a tela for maior que 1440px, irá aplicar a margem E/D
  max-width: 100%;

`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto='A galeria mais
              completa de
              fotos dos Grand Slams
              femininos!'
              backgroundImage={bannerBackground}
            />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>

    </FundoGradiente>
  )
}

export default App
