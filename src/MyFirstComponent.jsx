import { useState } from 'react';

const MyFirstComponent = ({ propOne, propTwo, propThree }) => {
  const [value, setValue] = useState(0);
  const [hola, setHola] = useState('Hola!!');
  //console.log(propOne, propTwo, propThree);
  console.log('MyFirstComponent render:', propOne);

  return (
    <div id="1" className="myclassname">
      {hola}, This is My First component {value}
    </div>
  );
};

export default MyFirstComponent;
