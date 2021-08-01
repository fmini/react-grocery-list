import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'One half pound bag of Cocao Covered Almonds Unsalted',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'item 3',
    },
  ]);
  /* The handleCheck function changes checked status for the item that changed with a map function */
  const handleCheck = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    /* Saving state to localStorage and we do this again in the handleDelete function below */
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };
  /* The handleDelete function uses filter to filrer all non-deleted items into listItems */
  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  return (
    <main>
      {/* Adding an empty list message by using ternary operator from line 41-71 */}
      {items.length ? (
        <ul>
          {/* Displaying list items with map() */}
          {items.map(item => (
            /* Lists of elements need keys for react to keep track of their state */
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                /* Adding an onChange listener */
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                /* Adding an onDoubleClick listener */
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                /* Adding an onClick listener */
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
