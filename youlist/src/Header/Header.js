import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Header (){
  return(
    <header style={{background:'#000000',height:'220px'}} className="center-block">
      <h1 style={{textAlign:'center',color:"#ffffff"}}>
        <strong>Youlist</strong>
        <br/>나를 위한 유튜브 모음 사이트
        <br/>
        <input style={{width:"70%",textAlign:"center"}}></input><button></button>
        </h1>
    </header>
  )
}
export default Header