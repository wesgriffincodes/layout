import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

class ColorPicker extends Component {
    state = {
      count: 0,
      color: 'white'
    }

    static propTypes = {
      colors: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    colorHandler = color => {
      this.setState(state => {
        return { color : color, count: state.count + 1 };
      });
    }

    render() {
      const { colors } = this.props;
    
      const colorElements = colors.map(color => {
        return (
          <button key={color} style={{ backgroundColor: color }} onClick={() => this.colorHandler(color)}>
            {color}
          </button>
        );
      });
    
      return (
        <section className={styles.ColorPicker}>
          <h1>hey</h1>
          <div style={{ backgroundColor: this.state.color }}>color</div>
          {colorElements}
        </section>
      );
    }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorPicker;
