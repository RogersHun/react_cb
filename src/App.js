/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [ modal, setModal] = useState(true);
  let [title, setTitle] = useState(1);


  return (
    
    <div className="App">
      <div className="black-nav">
       <h4 style={ {color: 'red', fontSize : '16px'}}>블로그임</h4>  
      </div>

      <button onClick = { () => {
        let wArray = [...글제목];
        wArray = wArray.sort();
        글제목변경(wArray);
      }}>
      정렬</button>

      <button onClick={ () => {
         let copy = [...글제목];
         copy[0] = '여자코트 추천';
         글제목변경(copy);
         }}>글수정</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick = { () =>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4 onClick ={()=>{ setModal(ture)}}>{ 글제목[2] }</h4>
        <p>2월 17일 발행 </p>
      </div>
      <h4>{ post }</h4>
    
     <Modal></Modal>

     {
      modal ==  true? <Modal title={title} 글제목변경={글제목변경} color={'yellow'} 글제목={글제목}/> : null
     }

     {
      글제목.map(function(a,i){
        return (
          <div className="list">
        <h4 onClick={()=> { setModal(true); setTitle(i)}}>{ 글제목[i] }</h4>
        <p>2월 17일 발행 </p>
        <button onClick={()=>{ props.글제목변경(['여자코트 추천']) }}>글수정</button>
      </div>
        )
      }
      )
     }

     <button onClick={()=>{ setTitle(0)}}>글제목1</button>
     <button onClick={()=>{ setTitle(0)}}>글제목1</button>
     <button onClick={()=>{ setTitle(0)}}>글제목1</button>

    </div>
       
  );
}




function Modal (props){
  return(
    <div className = 'modal' style={{background : props.color}}>
      <h4>{ props.글제목[title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
