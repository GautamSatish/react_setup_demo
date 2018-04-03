import React, { Component } from 'react';

class Tile extends React.Component {
  render() {
    const product = parseInt(this.props.number) * parseInt(this.props.multiplier);
    return (
      <div>
        <label> {this.props.number} X {this.props.multiplier} = {product} </label>
      </div>
    );
  }
}

export default Tile;
