import ApplicationRouter from './routes';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectLoginState } from './redux/auth';

const AppContainer = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  & header {
    position: relative;
    background-color: turquoise;
    box-shadow: 0 0 5px 0 grey;
    padding: 1rem;
  }

  & h2 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }

  & footer p {
    text-align: center;
  }
`;

function App() {
  const { isLoggedIn, activeUser } = useSelector(selectLoginState);
  return (
    <AppContainer>
      <header>
        <h2>Healthy Life {':)'}</h2>
        {isLoggedIn && <p>Welcome back, {activeUser} !</p>}
      </header>
      <ApplicationRouter></ApplicationRouter>
      <footer>
        <p>Some random bloke lol | 2021</p>
      </footer>
    </AppContainer>
  );
}

export default App;
