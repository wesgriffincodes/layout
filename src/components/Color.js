import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  render() {

    const { name, hex, rgb } = this.props;

    return (
      <dl style={{ color: hex }}>
        <dt>Name:</dt>
        <dd>{name}</dd>

        <dt>Hex:</dt>
        <dd>{hex}</dd>

        <dt>RGB:</dt>
        <dd>{rgb}</dd>
      </dl>
    );
  }
}

// const Color = ({ name, hex, rgb }) => {

//   return (
//     <dl style={{ color: hex }}>
//       <dt>Name:</dt>
//       <dd>{name}</dd>

//       <dt>Hex:</dt>
//       <dd>{hex}</dd>

//       <dt>RGB:</dt>
//       <dd>{rgb}</dd>
//     </dl>
//   );
// };

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.number.isRequired
};


export default Color;
