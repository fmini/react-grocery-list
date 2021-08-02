import React from 'react';
// added title prop from App.js
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
// Added default prop in case title not passed via props
Header.defaultProps = {
  title: 'Default Title',
};

export default Header;
