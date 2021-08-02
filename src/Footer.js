import React from 'react';

const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        You have {length} {length === 1 ? 'item' : 'items'}
      </p>
    </footer>
  );
};

export default Footer;
