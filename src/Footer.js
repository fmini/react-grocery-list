import React from 'react';
// passed in props.length from App.js to use below
const Footer = ({ length }) => {
  return (
    <footer>
      {/* added the paragraph below to show how many items in the list using props.length */}
      <p>
        You have {length} {length === 1 ? 'item' : 'items'}
      </p>
    </footer>
  );
};

export default Footer;
