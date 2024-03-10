import React from 'react';

class FavColorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ''
    };
  }

  handleColorChange = (color) => {
    localStorage.setItem('favColor', color);
    this.setState({ bgColor: color });
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <>
        <h1>Favorite Color App</h1>
        <button onClick={() => this.handleColorChange('red')}>Red</button>
        <button onClick={() => this.handleColorChange('green')}>Green</button>
        <button onClick={() => this.handleColorChange('blue')}>Blue</button>
      </>
    );
  }
}

export default FavColorApp;