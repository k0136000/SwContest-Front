import logo from './logo.svg';
import './index.css';
import imC from "./black.png"

function App() {
  return (
    <>
    <ul>
   <img className='op' src={imC} ></img>
   <div className='ek'>
    봐라오케
  </div>
  <li>
  <input className='eamp' type={'eamil'} placeholder = '이메일 주소'></input>
  </li>

  <li>
    <input className='pass' type={'password'} placeholder ='비밀번호' ></input>
  </li>

  <li>
  <input className='word'
  type={'password'} placeholder ='비밀번호 다시입력'></input>
  </li>
    
    <li>
    <button className='nemp'>회원가입 완료</button>
    </li>

</ul>
    </>
  );
}


export default App;
