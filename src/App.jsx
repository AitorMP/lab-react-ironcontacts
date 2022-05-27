import './App.css';
import data from './contacts.json';
import { useState } from 'react';

function App() {
  //ITERATION 1
  const [contactList, setContactList] = useState(data.slice(0, 5));

  //ITERATION 3

  const addContact = () => {
    const randomContact = Math.floor(Math.random() * data.length);
    const newRandomContact = data[randomContact];
    const newContactList = [...contactList];
    newContactList.push(newRandomContact);
    setContactList(newContactList);
  };

  //ITERATION 4
  const sortByName = () => {
    const name = [...contactList].sort((a, b) => (a.name > b.name ? 1 : -1));
    setContactList(name);
  };

  const sortByPopularity = () => {
    const popularity = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(popularity);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>

      {/* Iteration 3 */}
      <button onClick={() => addContact()}>Add Random Contact</button>
      {/* Iteration 4 */}
      <button onClick={() => sortByName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <table className="table">
        <tr>
          <th>
            <h3>Picture</h3>
          </th>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Popularity</h3>
          </th>
          <th>
            <h3>Won an Oscar</h3>
          </th>
          <th>
            <h3>Won an Emmy</h3>
          </th>
        </tr>

        {/* ITERATION 1 */}

        {contactList.map((contact) => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  style={{ width: '100px' }}
                  alt=" celeberty"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              {/* ITERATION 2 */}

              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy && '🏆'}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
