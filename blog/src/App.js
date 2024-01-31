import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [title, setTitle] = useState("강남 우동 맛집");


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 >Dev Blog</h4>
      </div>

      <div className="list">
        <h4>{title}</h4>
        <p>2월 17일</p>

      </div>
    </div>

  );
}

export default App;
