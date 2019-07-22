import React from "react";
import Rainbow from "./../hoc/Rainbow";

function About(props) {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>My color is: {props.color}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi officia
        atque iste architecto dolorem cum, voluptatem nemo quas deserunt totam!
      </p>
    </div>
  );
}

export default Rainbow(About);
