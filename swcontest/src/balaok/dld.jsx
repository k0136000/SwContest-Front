import '../index.css';
import imC from "../black.png"

function did() {
  return (
    <>
    
   <img className='op' src={imC} ></img>
   <div className='ek'>
    봐라오케
  </div>
  
  <input className='eamp' type={'eamil'} placeholder = '이메일 주소'></input>
  

  
    <input className='pass' type={'password'} placeholder ='비밀번호' ></input>


  
  <input className='word'
  type={'password'} placeholder ='비밀번호 다시입력'></input>
  
    
    
    <button className='nemp'>회원가입 완료</button>
    

    </>
  );
}
