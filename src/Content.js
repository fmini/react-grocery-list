import { useState } from 'react';

const Content = () => {
  /* const [whatever you are treacking the state of, function to set the state when change happens = useState('sets the initial state')] */
  const [name, setName] = useState('Dave');
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    /* passes the information for setting the state to the setName function which will change the current state */
    setName(names[int]);
  };

  const handleClick = () => {
    console.log('you clicked it');
  };

  const handleClick2 = name => {
    console.log(`${name} was clicked`);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      {/* // using onClick to run handleNameChange on top button */}
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={() => handleClick2('Dave')}>Click it</button>
    </main>
  );
};

export default Content;
