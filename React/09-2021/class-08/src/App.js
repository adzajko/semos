import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
  increment,
  decrement,
} from './features/counter/counterSlice';
import { selectDistros, setAllDistros } from './features/distros/distrosSlice';

const DISTROS = [
  {
    name: 'Ubuntu',
    difficultyLevel: 'Beginner',
    corporate: true,
  },
  {
    name: 'Debian',
    difficultyLevel: 'Beginner',
    corporate: false,
  },
];

function App() {
  const counterState = useSelector(selectCount);
  const distrosState = useSelector(selectDistros);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <section className="counter-state-section" id="counter-state-section">
        <h2>Current state value: {counterState}</h2>

        <div className="btn-group">
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
        </div>
      </section>
      <section className="distros-section">
        <h2>Current distros:</h2>
        {distrosState.map((distro, index) => (
          <Fragment key={index}>
            <h3>{distro.name}</h3>
          </Fragment>
        ))}

        <div className="btn-group">
          <button onClick={(event) => dispatch(setAllDistros(DISTROS))}>
            Set Distros
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
