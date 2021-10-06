import { useState, useEffect } from 'react';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import MainNavigation from './layout/Navigation';

// const MENU_ITEMS = [
//   {
//     id: 1,
//     name: 'something',
//     icon: 'icon'
//   },
//   {
//     id: 2,
//     name: 'something else',
//     icon: 'icon2'
//   }
// ];

function App() {
  const [itemsFromApi, setItemsFromApi] = useState([]);
  const bubbleListener = event => {};

  /**
   * useEffect is a hook (function) that acceps two arguments.
   * Argument One is a callback function that executes whichever effect we want.
   * It can be a HTTP call, transformations, anything really.
   * Argument Two is what makes useEffect important, the dependency array.
   * It can be missing, but this is usually an anti-pattern. Empty Dependency should be provided.
   * Empty dependency means that the effect is only triggered ONCE, without causing an infinite loop.
   */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
    })
      .then(res => res.json())
      .then(response => {
        setItemsFromApi(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='main-container'>
      {/* <nav className='menu'>
        {itemsFromApi.map(item => (
          <>
            <div className='menu-item' onClick={bubbleListener}>
              <p>{item.name}</p>
            </div>
          </>
        ))}
      </nav> */}
      <main>
        {/* 
          The Router needs to be imported as BrowserRouter and given an alias of Router.
          It needs to be the top most component of the application where routes are rendered.
          This does not mean that no components can live outside the router, rather, those components will not have access to the Router functionalities.
          The secondary component that needs to be included is the Switch component, which will actually handle the routing
        */}
        <Router>
          <MainNavigation />
          <Switch>
            {/* 
              Each route of the application needs to be registered.
              We can register a route by using the Route component and adding the necessary props as arguments.
              Two props are present on almost every route, the component to be rendered, and on which path to render the component.
             */}
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
            <Route component={NotFound} path='*' />
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
