import '../App.css';
import imA from "../hw.png"
import { Link } from 'react-router-dom';

function start() {
  return (
    <>

      <div className='to'>봐라오케</div>
      <ul>
     
     <Link to = '#' className='yo'>악보검색</Link> 
     
    
     <Link to ='/log' className='po'>로그인</Link>

     <img className='im' src={imA}></img>
     </ul>
    </>
  );
}

export default start;