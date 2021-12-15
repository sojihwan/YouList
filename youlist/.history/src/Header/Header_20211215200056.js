import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'

function Header (){
  const [Log, setLog] = useState('');
  const onChange = (e) => {
    setLog(e.target.value);
  };
  const handleKeyPress = e => {
    if(e.key === 'Enter') {
      setLog('');
    }







    
  
  return(
    <header className='Headercss'>
      <h1 style={{textAlign:'center',color:"#ffffff"}}>
        <strong style={{color:"red"}}>YOUList</strong>
        <br/>나를 위한 유튜브 모음 사이트
        <br/>
        <input 
          style={{width:"70%",textAlign:"center",borderRadius:"20PX"}}
          onKeyPress={handleKeyPress}
          name="select" 
          onChange={onChange}
          value={Log}>
            
        </input>
        </h1>
    </header>
  )
}
export default Header