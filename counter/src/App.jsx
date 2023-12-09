import React from "react";
import "./App.css";

class Counter extends React.Component {
  // count = 0;

  state = {
    count : 0    //re-render the state
  }

  Inc = () =>{
    // this.count+=1;
    // console.log(this.count);
    this.setState({ count: this.state.count + 1})
  }


  render() {

    let Dec = () =>{
      if(this.state.count > 0){
        this.setState({ count: this.state.count - 1})
      }
    }

    let reset = ()=>{
      this.setState({ count: this.state.count = 0})
    }
    
    return (
      <>
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        <div className="buttons_div">
          <button onClick={this.Inc}>+</button>
          <button onClick={Dec}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </>
    );
  }
}

export default Counter;
