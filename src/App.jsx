import React, { Component } from 'react';
import Form from './Form';
import Tile from './Tile';

class App extends React.Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.state = {
      number:'',
      start:'',
      end: '',
    };
  }
  updateState(n,s,e) {
    this.setState({number:n, start:s, end:e});
  }
  render() {
    const tiles = [];
    for (let i = parseInt(this.state.start);
      (i <= parseInt(this.state.end)) && (this.state.number);
      i++) { tiles.push(<Tile key={i} number={this.state.number} multiplier={i} />); }
    return (
      <div>
        <h1>Multiplication Tables</h1>
        <Form submitFunc={this.updateState}/>
        {tiles}
      </div>
    );
  }
}

export default App;
