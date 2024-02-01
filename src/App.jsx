import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
// na interpolação de string é onde vai o código css
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #1e033f 4.16%, #3c087a 48%, #790CFF 96.76%); 
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
    </FundoGradiente>
  )
}

export default App
