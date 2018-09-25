import React, { Component } from 'react';
class MyComponent extends Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this, 'Hello');
  }
  
  handleClick(param, e) {
    console.log('Parameter : ', param);
    console.log('Event', e);
  }
  
  render() {
      return(
          <div>
    <button onClick={this.handleClick}> Loda</button>
    </div>
    )}
}

export default MyComponent;