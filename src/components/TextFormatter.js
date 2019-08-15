import React, { Component } from 'react';
import figlet from 'figlet';

class TextFormatter extends Component {

    state = {
      text: 'this.state',
      color: 'black',
    }



handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}




render() {
  const {
    text,
    color,
  } = this.state;



  return (
    <div>
      <input type="text" name="text" value={text} onChange={this.handleChange}/>
      <input type="color" name="color" value={color} onChange={this.handleChange}/>
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  );
}
}

export default TextFormatter;


