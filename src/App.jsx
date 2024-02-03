import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from '/imagens/banner.png'
// na interpolação de string é onde vai o código css
const FundoGradiente = styled.div`
  background-color: #000000;
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner 
        texto='A galeria mais
        completa de 
        fotos dos Grand Slams
        femininos!'
        backgroundImage={bannerBackground}
      />

    </FundoGradiente>
  )
}

export default App
