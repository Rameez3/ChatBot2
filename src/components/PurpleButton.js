import React, { useState } from 'react';

// This component is a button that turns purple when you hover over it.
const PurpleButton = (props) => {
    // The state variable that keeps track of whether the button is hovered on or not
  const [isHovered, setIsHovered] = useState(false);
// The styles that will be applied to the button primarily 
  const buttonStyles = {
    backgroundColor: "#4D1979",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    borderRadius: "10px",
  };
// The styles that will be applied when the button is hovered on
  const buttonHoverStyles = {
    backgroundColor: "#00B2A9",
    color: "#4D1979",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)"
  };
// When the mouse enters the button, setIsHovered is set to true
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
// When the mouse leaves the button, setIsHovered is set to false
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
// The styles that will be applied to the button
  const mergedStyles = {
    ...buttonStyles,
    ...(isHovered ? buttonHoverStyles : {}),
  };

  return (
    <a
      href={props.link}
      style={mergedStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.title}
    </a>
  );
};

export default PurpleButton;
