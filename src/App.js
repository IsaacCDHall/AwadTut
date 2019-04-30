import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter"
class App extends Component {
  // add(a, b) {
  //   return a + b;
  // }

  state = {
    visible: true
  };


  render() {
    // now make the counter display none with the class of hidden only when the slider is showing so that we don't need to unmount in order to show slider
    const buttonText = this.state.visible ? 'hide' : 'show';
    const slider = this.state.visible ? (
      <ImageSlider />
    ) : (
      <div className = {!this.state.visible ? 'visible': 'hidden'}>
         <Counter />
      </div>
    );

    return (
      <div className="App">
        {slider}
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible
            });

          }}
        >
        {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
