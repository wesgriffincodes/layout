import React, { useState } from 'react';


const UpDown = () => {

  const [count, setCount] = useState(0);
 

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
    if(count === 0) {
      setCount(count);
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

export default UpDown;
