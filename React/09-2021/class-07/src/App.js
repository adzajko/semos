import styled from 'styled-components';
import Footer from './components/layout/Footer';
import ApplicationRouter from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.section`
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr auto;
`;

function App() {
  return (
    <AppContainer>
      <ApplicationRouter></ApplicationRouter>
      <ToastContainer position="bottom-right" />
      <Footer />
    </AppContainer>
  );
}

export default App;
