import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Color.css';

class Sports extends Component {
  render() {

    const { name } = this.props;

    return (
      <div className="sport">
        <dl>
          <dt>Sport:</dt>
          <dd>{name}</dd>
        </dl>
      </div>
    );
  }
}
// const Sports = (name) => {

//   return (
//     <dl>
//       <dt>Sport:</dt>
//       <dd>{name}</dd>
//     </dl>
//   );
// };

Sports.propTypes = {
  name: PropTypes.string.required
};

export default Sports;
