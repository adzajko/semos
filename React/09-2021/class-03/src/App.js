import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/layout/HeroSection';

// const arrayOne = [1, 2];

function App() {
  /**
   * useState is a React Hook that returns an array of two elements
   * Element one is a reference to the current value of the state
   * Element two is a function used to update the value of the state. A.K.A. Dispatch
   * React forces a re-render everytime the state has been changed.
   * useState can be called multiple times in a single component.
   */
  const [stateValue, setStateValue] = useState(2);

  const handleUpdateStateClick = event => {
    setStateValue(5);
  };

  return (
    <div className='main-grid-container'>
      <Header />
      <main>
        Current state value is:
        {stateValue}
        <button onClick={handleUpdateStateClick}>Update state!</button>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
