import React from 'react';
import LinkSection from './LinkSection'; // Importing the LinkSection component

// This component represents a page (LinktreePage) with sections containing links or content
const LinktreePage = () => {
  // Array containing sections with either links or content
  const sections = [
    {
      content: 'Abbie Daniel', // Content section without links
    },
    {
      title: 'Connect with me!',
      links: [
        { title: 'Linkedin', url: 'https://www.linkedin.com/in/abbiegd/' }
      ], // Section with links to LinkedIn profile
    },
    {
      title: 'Projects',
      links: [
        { title: 'Portfolio', url: '' }, // Empty URL for Portfolio link - to be added later
        { title: 'Github', url: 'https://github.com/Abbiegd' }, // Link to Github profile
      ], // Section with links to Portfolio and Github
    },
  ];


  const profileImage = require('../components/images/profilePicture.jpg'); // Profile image import

  return (
    <div className="container" data-testid="linktree-page">
      <h1 className="WebpageTitle">Linktree</h1>
      <img src={profileImage} alt="Image of Abbie" className="MyImage" />

      {sections.map((section, index) => (
        // Mapping through sections array to render LinkSection or content div based on presence of links
        (section.links && section.links.length > 0) ? (
          <LinkSection key={index} title={section.title} links={section.links} />
        ) : (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p> {/* Render content section */}
          </div>
        )
      ))}
    </div>
  );
};

export default LinktreePage; // Exporting the LinktreePage component
