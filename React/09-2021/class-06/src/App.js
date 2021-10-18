import styled from 'styled-components';
import Footer from './layout/Footer';
import ApplicationRouter from './routes';

const AppContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ApplicationRouter />
      <Footer />
    </AppContainer>
  );
}

export default App;
