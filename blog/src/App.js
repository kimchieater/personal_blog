import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천','강남 우동 맛집',  '파이썬 독학']);
  let [number, setNumber] = useState(0)

  return (
    <div className="App">

      <div className='black-nav'>
        <h4 >Dev Blog</h4>
      </div>

      <div className="list">

        <button onClick={()=>{
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}>가나다 순 정렬</button>
        <h4>{title[0]}<span onClick={()=>{
          setNumber(number+1)
        }}>좋아요</span> {number}</h4>
        <p>2월 17일</p>
      </div>
      
      <div className="list">
        <h4>{title[1]}</h4>

        <button onClick={()=>{
          let temp = [...title];
          temp[1] = "여자 코트 추천";
          setTitle(temp);
        }}>Click me</button>

        <p>2월 17일</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일</p>
      </div>
      
      <Modal></Modal>

    
    </div>

  );
}
const Modal = () =>{
  return(
    <div className="modal">
      <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
export default App;
