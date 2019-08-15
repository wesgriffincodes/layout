import React, { Component } from 'react';


class Increment extends Component {

  state = {
    count: 0
  }

    buttonPress = () => {
      this.setState({ count: this.state.count + 1 });
      console.log('count');
    }   


    
    render() {
      return (
        <>
        <p>{this.state.count}</p>
        <button onClick={this.buttonPress}>counter</button>
        </>
      );
    }
}


export default Increment;
