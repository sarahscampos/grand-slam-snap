import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral";
// na interpolação de string é onde vai o código css
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #460891 4.16%, #5a09bd 48%, #790CFF 96.76%); 
  width: 100%;
  min-height: 100vh;
`;

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />

    </FundoGradiente>
  )
}

export default App
