import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Modal (){
  const [Log, setLog] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = Log; 

  const onChange = (e) => {
 const { id, value } = e.target   
 const nextInputs = {
         ...Log,  
         [id]: value,
     }
     setLog(nextInputs)       

 }

  const onReset = () => {
    if(id===""||pw===""){
      alert("아이디 또는 패스워드가 비어있습니다.")
    }
    setLog({
      id:"",
      pw:""
    })
  };

  return(
    <bady style={{background:'#2F4F4F',width:'70%',height:'550px',position:'fixed',top:'220px',left:'30%'}} className="center-block">
          <p style={{position:"absolute",top:"25%",left:"20%",width:"40%",height:"30%",backgroundColor:"#DCDCDC"}}>
            <p style={{position:"absolute",top:"15%",left:"20%"}}>
              ID<br/>
              <input name="id" type="text" value={id} onChange={onChange}/>
              <br/> 
              PW<br/>
              <input name="pw" type="password" value={pw} onChange={onChange}/>
            </p>
            <button style={{position:"absolute",top:"25%",left:"65%",width:"20%",height:"60%"}} onClick={onReset}>LONIN</button>
          </p>
    </bady>
  )
}
export default Modal;