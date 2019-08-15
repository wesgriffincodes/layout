import React, { Component } from 'react';
import figlet from 'figlet';

class TextFormatter extends Component {

    state = {
      text: 'this.state',
      color: 'black',
      formattedText: '',
      font: ''
    }

    formatText = () => {
      const { text, font } = this.state;
      figlet.text(text, {
        font: font
      }, (err, result) => {
        this.setState({ formattedText: result });
      });
    }


handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value }, () => {
    this.formatText();
  });
};




render() {
  const {
    text,
    color,
    formattedText,
    font
  } = this.state;

  const fontOptions = ['Avatar', 'Banner', 'Alligator', 'Linux'].map(font => {
    return <option key={font} value={font}>{font}</option>;
  });

  return (
    <div>
      <select name="font" value={font} onChange={this.handleChange}>{fontOptions}</select>
      <input type="text" name="text" value={text} onChange={this.handleChange}/>
      <input type="color" name="color" value={color} onChange={this.handleChange}/>
      <h1 style={{ color: color }}>{text}</h1>
      <pre style={{ color }}>{formattedText}</pre>
    </div>
  );
}
}

export default TextFormatter;


