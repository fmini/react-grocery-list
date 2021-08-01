//import React from 'react';

const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('you clicked it');
  };

  const handleClick2 = name => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = e => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      {/* // using onDoubleClick on the <p> element </p> to run handleClick */}
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      {/* // using onClick to run handleClick on top button */}
      <button onClick={handleClick}>Click it</button>
      {/* // passing 'Dave' from insinde the handler to handleClick2 */}
      <button onClick={() => handleClick2('Dave')}>Click it</button>
      {/* // grabbing the event from handleClick3 and passing part of it into the 
      handleClcik3 handler*/}
      <button onClick={e => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Content;
