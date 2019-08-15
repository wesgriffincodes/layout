import React, { Component } from 'react';
import Header from './Header';
import TextColor from './TextColor';
import TextFormatter from './TextFormatter';


class App extends Component {


  render() {
    return (
      <>
        <Header />
        <TextColor />
        <TextFormatter />
      </>
    );
  }
}
  
export default App;
