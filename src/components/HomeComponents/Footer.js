import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();


  const backgroundColorFooter = {
    backgroundColor: "#4D1979",
    margin: "0"
  };


  return (
    <footer>
      <p className="text-white text-center" style={backgroundColorFooter}>&copy; Riverside Chat {currentYear}</p>
    </footer>
  );
}

export default Footer;
