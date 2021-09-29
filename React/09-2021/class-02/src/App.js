import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Main from './components/layout/main';

function App() {
  return (
    /**
     * The classic hamburger layout requires a grid container with three elements inside.
     */
    <div className='main-grid-container'>
      {/* Instead of writing the whole HTML code here, we separate them into components for readabillity */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
