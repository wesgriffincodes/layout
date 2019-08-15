import React, { useState } from 'react';

const Trial = () => {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    console.log('count');
  };

  const decrease = () => {
    setCount(count - 1);
    if(count === 0) {
      setCount(0);
    }

  };

  return (
      <>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      </>
  );
};

export default Trial;

