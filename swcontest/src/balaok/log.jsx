import '../index.css';
import imB from "../black.png"

function log() {
  return (
    <>
    <div className='jo'><h1>봐라오케</h1></div>
  
      
        <button className='wo'>로그인</button>
        
     
     <button className='wo'>로그인</button>
    
     
     <a lang='' className='mo'>회원가입</a>
     
     
     <input className='lo' type={'email'} placeholder='이메일주소'></input>
    
    
    <input className='password' type={'password'} placeholder='비밀번호'></input>

     <img className='ip' src={imB} ></img>

     
   
    </>
  );
}


export default log;