import React from 'react';
import Link from './Link'; // Importing the Link component from './Link' file

// This component represents a section containing multiple links
const LinkSection = ({ title, links }) => {
  return (
    <div className='section link-section'> {/* Container div with specific classes */}
      <h2 className='SectionTitle'>{title}</h2> {/* Heading displaying the section title */}
      {/* Mapping through 'links' array to render each link */}
      {links.map((link, index) => (  
        <Link key={index} title={link.title} url={link.url} /> /* Rendering individual Link components */
      ))}
    </div>
  );
};

export default LinkSection; // Exporting the LinkSection component to use it elsewhere in the application
