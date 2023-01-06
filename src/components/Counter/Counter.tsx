import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className='flex text-9xl'>
      <button type='button' className='' onClick={decrement} data-testId='decrement'>
        -
      </button>
      <span data-testId='counter'>{count}</span>
      <button type='button' className='' onClick={increment} data-testId='increment'>
        +
      </button>
    </div>
  );
};

export default Counter;
