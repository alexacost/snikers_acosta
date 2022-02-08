// src/App.js
import React, { Component } from 'react';

class Counter extends Component {
    state = {
      count: 0,
    };
  handleClickplus = () => {
    this.setState(({ count }) => ({
      count: count + 1,
      
    }));
  };
  handleClickminus = () => {
    this.setState(({ count  }) => ({
      count: count - 1,
      
    }));
  };
  handleReset = () => {
    this.setState(({ count }) => ({
      count: 0,
      
    }));
  };

  render() {
      console.log(this.state.count)
    return (
      <div className='row align-items-start justify-content-center m-2'>
        {this.state.count == 10 ? <button className='col-5 btn btn-outline-secondary btn-sm' disabled >+</button> :  <button className='col-5 btn btn-outline-primary btn-sm' onClick={this.handleClickplus}> + </button> }
        <p className='col-2'>{this.state.count}</p>
        {this.state.count > 0 ?  <button className='col-5 btn btn-outline-primary btn-sm' onClick={this.handleClickminus}> - </button>  : <button className='col-5 btn btn-outline-secondary btn-sm' disabled> - </button> }
        {/* <button className='col-12 btn btn-primary' onClick={this.handleReset}> Reset </button> */}
      </div>
    );
  }
}

export default Counter;
