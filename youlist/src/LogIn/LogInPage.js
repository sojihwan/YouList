import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Modal (){
  const [Log,setLog] = useState({
    id: "",
    pw: ""
  });
  
  const {id ,pw} =Log

  function iog(){
    
    if(Log===" "){
      alert("비밀번호 또는 아이디을 입력해주세요")
    }
  }

  return(
    <bady style={{background:'#2F4F4F',width:'70%',height:'550px',position:'fixed',top:'220px',left:'30%'}} className="center-block">
          <p style={{position:"absolute",top:"25%",left:"20%",width:"40%",height:"30%",backgroundColor:"#DCDCDC"}}>
            <p style={{position:"absolute",top:"15%",left:"20%"}}>
              ID<br/>
              <input name="id" type="text" value="id"/>
              <br/> 
              PW<br/>
              <input name="pw" type="password" value="pw"/>
            </p>
            <button style={{position:"absolute",top:"25%",left:"65%",width:"20%",height:"60%"}} onClick={iog}>LONIN</button>
          </p>
    </bady>
  )
}
export default Modal;