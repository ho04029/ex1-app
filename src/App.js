import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import React, {useState} from 'react';

function App() {
  //배열 반환 useState(초기값)
  let [number, setNumber] = useState(0);

  //+버튼을 클릭했을 때 호출되는 함수
  //number 값을 1증가하는 함수
  const onAdd = () =>{
    //state값을 변경할 때는 반드시 setter를 사용해야함: setNumber()
    setNumber(number + 1);
  }
  return (
    <div className="App">
      App입니다 : {number} &nbsp;
      <button onClick={onAdd}>+</button>
      <Header number={number}></Header>
      <Content onAdd={onAdd}></Content>
    </div>
  );
}

export default App;
