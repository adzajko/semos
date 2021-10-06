import { useEffect, useState } from 'react';

const About = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(response => {
        setUserData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h2>About Me</h2>
      <h5>{userData?.name}</h5>
      <p>Mail: {userData?.email}</p>
      <p>City: {userData?.address?.city}</p>
      <p>Phone: {userData?.phone}</p>
    </section>
  );
};

export default About;
