import ItemList from './ItemList';
// moved entire unordered list to ItemList component and, imported it, and passed the props down
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
