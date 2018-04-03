import React, { Component } from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.onNumberChange = this.onNumberChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);

    this.state = {
      number:'',
      start:1,
      end: 15,
    };
  }

  onNumberChange(e) {
    this.setState({number:e.target.value});
  }
  onStartChange(e) {
    this.setState({start:e.target.value});
  }
  onEndChange(e) {
    this.setState({end:e.target.value});
  }
  onBtnClick(e) {
    e.preventDefault();
    this.props.submitFunc(this.state.number, this.state.start, this.state.end);
  }

  render() {
    return (
      <div>
        <div>
          <label>Enter a number: </label>
          <input onChange={this.onNumberChange}/>
        </div>
        <div>
          <label>Enter the range: </label>
          <input onChange={this.onStartChange} placeholder={this.state.start}/>
          <label> to </label>
          <input onChange={this.onEndChange} placeholder={this.state.end}/>
        </div>
        <button onClick={this.onBtnClick}>Calculate</button>
      </div>
    );
  }
}

export default Form;
