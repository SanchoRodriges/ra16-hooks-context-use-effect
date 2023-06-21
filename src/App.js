import './App.css';
import Details from './components/Details';
import List from './components/List'
import React, {useState, useEffect} from 'react';

function App() {

  const [links, setLinks] = useState([]);
  const [info, setInfo] = useState('');
 
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

  const getLinks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLinks(data);
  }

  useEffect(() => {
    getLinks();
  }, [])

  const clickLink = user => {
    setInfo(user);
  }

  return (
    <div className="users">
      <ul className='links'>
        <List
          links={links}
          click={user => {
            clickLink(user)
          }}
        />
      </ul>
      <div className='details'>
        <Details
          info={info}
        />
      </div>
    </div>
  );
}

export default App;
