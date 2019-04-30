import React from "react";

/*
  1. shallow merge
  2. async
*/

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg"
    ],
    idx: 0
  };

  handleNext = () => {
    // logs before state change
    console.log(this.state);
    this.setState({
      idx: this.state.idx + 1
    }, ()=> {
        //this is a callback lambda function to see most recently updated state
        console.log(this.state);
    });
    // this console.log has the same effect as the one above setState since setState is asynchronous
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            // this could also be down in the same way as below's handleNext method. This is slightly more costly as the handleNext function is only created once, then referenced. The function below is created every click
            this.setState({
              idx: this.state.idx - 1
            });
          }}
        >
          previous
        </button>
        <img
          style={{
            width: 500,
            height: 500
          }}
          src={this.state.images[this.state.idx]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
