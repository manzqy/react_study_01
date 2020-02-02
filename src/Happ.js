import React, { Component } from 'react';
const Happ = (Xyz) => {
  return class Hello extends Component {
    state = {  }
    render() { 
      return ( 
        <div>
          <Xyz />
          <div style={{color: 'green'}}>Hoc</div>
        </div>
       );
    }
  }
}
export default Happ
