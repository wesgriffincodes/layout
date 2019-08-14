import React from 'react';
import PropTypes from 'prop-types';

const Dog = ({ name, age, weight }) => {
  return (
    <dl>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Age:</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
};

export default Dog;


