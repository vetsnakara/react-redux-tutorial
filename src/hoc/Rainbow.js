import React from "react";

const Rainbow = WrappedComponent => {
  const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
  const index = Math.floor(Math.random() * colors.length);
  const randomColor = colors[index];
  const className = randomColor + "-text";

  return props => {
    props = { ...props, color: randomColor };
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
