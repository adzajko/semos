import React, { useEffect, useState } from 'react';
// import * as AOS from 'aos'
import { useTransition } from 'react-spring';

function App() {
  const [triggerRefresh, setTriggerRefresh] = useState(false);
  useEffect(() => {
    if (triggerRefresh === true) {
      console.log('Refresh Triggered!');
    }

    return () => setTriggerRefresh(false);
  }, [triggerRefresh]);

  const trigger = () => {
    setTriggerRefresh(true);
  };
  const items = [1, 2, 3];
  // AOS.init();
  /* eslint-disable */
  const transition = useTransition(items, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <div className="App">
      <button onClick={trigger}>Trigger refresh</button>
    </div>
  );
}

export default App;

// Model.find().where('age').gt(3);

// SELECT * FROM models WHERE age == 3. TypeORM Sequelize
