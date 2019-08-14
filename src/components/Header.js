import React from 'react';
// import PropTypes from 'prop-types';

const Header = () => {

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    height: '10vh'
  };

  const imgStyle = {
    height: '80%'
  };

  return (
    <div style={styles}>
      <img style={imgStyle} src="../../assets/logo-me.png" alt="Welcome!"/>
      <h1>React-layouts</h1>
    </div>
  );
};

export default Header;
