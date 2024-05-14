// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';

import { useCounterContext } from "../hooks/useCountContext";

const About = () => {

    // const {counter} = useContext(CounterContext);
    const { counter } = useCounterContext();

  return (
    <div>
        <h1>About</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About