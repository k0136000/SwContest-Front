import './app.css';
import imA from "./hw.png"
import { Link } from 'react-router-dom';

function start() {
  return (
    <>

      <div className='to'>봐라오케</div>
      <ul>
     
     
     <a href='#'className='yo'>악보검색</a>
     
     
     <a href="./log" className='po'>로그인</a>
     
     <img className='im' src={imA}></img>
     </ul>
    </>
  );
}

export default start;