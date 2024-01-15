import React from 'react';

// This component renders a button that, when clicked, opens a new tab/window with the provided URL
const Link = ({ title, url }) => {
  // Function to handle the button click event
  const handleClick = () => {
    // Opens the provided URL in a new tab/window with security measures ('noopener' and 'noreferrer')
    window.open(url, '_blank', 'noopener noreferrer');
  };

  // Renders a button with the specified title, clicking on which triggers the handleClick function
  return (
    <div>
      <button className="linkButton" onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Link; // Exports the Link component to be used elsewhere in the application

