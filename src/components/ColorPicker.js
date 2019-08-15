import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';
import Increment from './Increment';

class ColorPicker extends Component {
    state = {
      counter: 0,
      count: 0,
      color: 'white',
      name: 'bob'
    }



    static propTypes = {
      colors: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    colorHandler = color => {
      this.setState(state => {
        return { color : color, count: state.count + 1 };
      });
    }

    // loop through array of names on button click
    nameChange = () => {
      const names = ['jim', 'nick', 'terrel'];

      this.setState(state => {
        return { counter: state.counter + 1, name: names[state.counter] };
      });
    }
    // -------

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
          <h2>{this.state.name}</h2>
          <button onClick={this.nameChange}>huh</button>
          <div style={{ backgroundColor: this.state.color }}>color</div>
          {colorElements}
          <p>{this.state.count}</p>
          <Increment />
        </section>
      );
    }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorPicker;
