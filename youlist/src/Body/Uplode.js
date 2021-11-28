import React from "react";

function Uplode() {
  function login(){
  }
  return(
    <bady style={{background:'#2F4F4F',width:'60%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">
      <h3>제목</h3><br/>
      <input type="text"style={{width:"90%"}} required/><br/>
      <h3>링크</h3><br/>
      <input type="text"style={{width:"90%"}} required/><br/>
      <h3>태그</h3><br/>
      <input type="text"style={{width:"90%"}} required/><br/>
      <button className="btn btn-warning" style={{width:"100px",height:"50px",background:'#2F4F4F'}} onClick={login}>올리기</button>
    </bady>
  )
}

export default Uplode