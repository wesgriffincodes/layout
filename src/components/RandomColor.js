import React, { Component } from 'react';

class RandomColor extends Component {

    state = {
      rgb: '25,223,115',
      colorCount: 0
    }

    changeColor = () => {
      const colorCode = ((Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)));

      return this.setState({ rgb: colorCode });
    }

    render() {
      return (
            <>
            <button onClick={this.changeColor} style={{ backgroundColor: this.state.rgb }}></button>
            </>
      );
    }

}

export default RandomColor;
