import './App.css';
import data from './contacts.json';
import { useState } from 'react';

function App() {
  //ITERATION 1
  const [contactList, setContactList] = useState(data.slice(0, 5));

  return (
    <div className="App">
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
