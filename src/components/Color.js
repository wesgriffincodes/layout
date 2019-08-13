import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>Red-{rgb}</p>
        <p>Green-{rgb}</p>
        <p>Blue-{rgb}</p>
      </dd>
    </dl>
  );
}

Color.protoTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.number.isRequired
};


export default Color;
