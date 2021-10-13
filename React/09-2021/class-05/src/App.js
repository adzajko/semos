import styled from 'styled-components';
import ApplicationRoutes from './routes';

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ApplicationRoutes />
    </AppContainer>
  );
}

export default App;
