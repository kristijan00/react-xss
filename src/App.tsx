import React from 'react';
import './App.css';
import Login from './components/login';
import ForumList from './components/forumList';
import {useState} from 'react';

interface post {
  message: string;
  link: string;
}

function App() {

  const [forumList, setforumList] = useState<post[]>([]);
  const [person, setPerson] = useState<string>('');

  // useEffect(() => {
  //   getPerson();
  // }, []);

  const getComment = (commentObj: { message: string, link:string }): void => {
    const newData = [...forumList];
    newData.push(commentObj);
    setforumList(newData);
  }

  function getPerson() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setPerson(data);
      });
  }
  // function createPerson() {
  //   let name = prompt('Enter merchant name');
  //   let email = prompt('Enter merchant email');
  //   fetch('http://localhost:3001/merchants', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({name, email}),
  //   })
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(data => {
  //       alert(data);
  //       getMerchant();
  //     });
  // }

  return (
    <div className="app">
      <header className="App-header">

      </header>

      <main>
        <h1>React XSS</h1>
        <div className="login">
          <Login getComment={getComment} />
        </div>
        
        <div className="list">
          <ForumList post={forumList} />
        </div>
      </main>
    </div>
  );
}

export default App;
