import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Modal (){
  return(
    <bady style={{background:'#2F4F4F',width:'70%',height:'550px',position:'fixed',top:'220px',left:'30%'}} className="center-block">
          <p style={{position:"absolute",top:"25%",left:"20%",width:"40%",height:"30%",backgroundColor:"#DCDCDC"}}>
            <p style={{position:"absolute",top:"15%",left:"20%"}}>
              ID<br/>
              <input type="text"/>
              <br/> 
              PW<br/>
              <input type="password"/>
            </p>
            <button style={{position:"absolute",top:"25%",left:"65%",width:"20%",height:"60%"}}>LONIN</button>
          </p>
    </bady>
  )
}
export default Modal;