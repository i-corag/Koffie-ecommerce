import style from './AddQty.module.css';
import { Button, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const Counter = ({ onAdd }) => {

  const [counter, setCounter] = useState(0)

  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => (counter > 0) ? setCounter(counter - 1) : setCounter(0)

  return (
    <div className={style.container}>
      <div className={style.counter_container}>
        <Button variant='koffie' onClick={decreaseCounter}>-</Button>
        <Heading size='sm' variant='koffie'>
          {counter}
        </Heading>
        <Button variant='koffie' onClick={increaseCounter}>+</Button>
      </div>
      <Button variant="koffie-solid" mx='2em' onClick={() => onAdd(counter)}>Add to cart</Button>
    </div>
  );
};

export default Counter;
