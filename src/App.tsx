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

  const getComment = (commentObj: { message: string, link:string }): void => {
    const newData = [...forumList];
    newData.push(commentObj);
    setforumList(newData);
  }

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
