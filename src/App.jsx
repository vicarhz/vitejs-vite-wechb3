import { useState } from 'react';
import './App.css';
import MyFirstComponent from './MyFirstComponent';

function App() {
  const [value, setValue] = useState(0);

  /*   setTimeout(() => {
    setValue(value + 1);
  }, 5000); */

  console.log('App render:', value);

  return (
    <>
      <h1>Vite + React</h1>
      <MyFirstComponent propOne={value} propTwo={2} propThree={{}} />
    </>
  );
}

export default App;
