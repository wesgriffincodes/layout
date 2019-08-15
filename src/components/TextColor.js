import React, { useState } from 'react';

const TextColor = () => {


  const [formatChange, setFormatChange] = useState({
    text: 'useState',
    color: '',

  });

  

  const handleChange = ({ target }) => {
    setFormatChange({ ...formatChange, [target.name]: target.value });
  };



  return (
        <>
            <input type="text" name="text" value={formatChange.text} onChange={handleChange}/>
            <input type="color" name="color" value={formatChange.color} onChange={handleChange}/>

            <h1 style={{ color: formatChange.color }}>{formatChange.text}</h1>
        </>
  );
};

export default TextColor;

