import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeroSection = props => {
  /**
   * Showcase for multiple useStates
   */
  const [loginState, setLoginState] = useState();
  const [arrayFromApi, setArrayFromApi] = useState([]);
  const [deletedItemTrigger, setDeletedItemTrigger] = useState(false);
  const [currentType, setCurrentType] = useState('password');

  // useEffect(() => {
  //     axios.get('url')
  //     .then((response) => {
  //         setArrayFromApi(response.data);
  //     })
  //     .catch(err => {})
  // }, []);

  //   axios
  //     .post('url', 'lmao')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  //   fetch('url', {
  //       method: 'POST',
  //       body: JSON.stringify('lmao'),
  //       headers: {'Content-Type': 'application/json'}
  //   })
  //     .then(res => res.json())
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  useEffect(() => {
    axios
      .get('colorsFromApi')
      .then(response => {
        setArrayFromApi(response.data);
      })
      .catch(err => {});
  }, [deletedItemTrigger]);

  const handleLogin = event => {
    setLoginState(true);
    const formData = {
      username: 'Lol',
      password: 'Lmaao'
    };
    axios
      .post('https://google.com', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //   fetch('url')
  //   .then((response) => response.json())
  //   .then((response) => { console.log('do something')})
  //   .catch(err => {console.log(err)})
  const handleLogout = event => {
    setLoginState(false);
  };

  return (
    <section className='hero-section'>
      {!loginState && ( // Conditionals, we will only see the HTML wrapped in a Fragment (empty tag or a React.Fragment / Fragment tag) if the loginState variable is a falsy value
        <>
          <h5 className='text-white'>Welcome back User!</h5>
          <p>Please click the button below to login</p>
          <button onClick={handleLogin} className='btn'>
            Log In
          </button>{' '}
        </>
      )}
      {loginState && (
        <>
          <h5 className='text-white'>Hello Chasitka</h5>
          <p>You have been logged in for 5 hours.</p>
          <button className='btn' onClick={handleLogout}>
            Log Out
          </button>
          <input type={currentType} />
          <button
            onClick={() => {
              if (currentType === 'password') {
                setCurrentType('text');
              } else {
                setCurrentType('password');
              }
            }}
          >
            Show Password
          </button>
        </>
      )}
    </section>
  );
};

export default HeroSection;
