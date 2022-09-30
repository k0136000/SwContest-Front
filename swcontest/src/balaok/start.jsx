import logo from './logo.svg';
import './App.css';
import imA from "./hw.png"
import './index.css';
function App() {
  return (
    <>
      <div className='to'>봐라오케</div>
      <ul>
     <li>
     <a className='yo' href=''>악보검색</a>
     </li>
      <li>
      <a className='po' href=''>로그인</a>
      </li>
     <img className='im' src={imA}></img>
     </ul>
    </>
  );
}

export default App;