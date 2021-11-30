import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'

function Header (){
  return(
    <header style={{background:'#2F4F4F',height:'220px'}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>Youlist</strong>
        <br/>나를 위한 유튜브 모음 사이트
        <br/>
        </h1>
        <div>
        <button type="button" className="btn btn-success"style={{background:'#2F4F4F' ,width:'100%',color:"#000000"}}>蘇智煥의</button><br/>
        <button type="button" className="btn btn-warning"style={{background:'#2F4F4F' ,width:'100%',color:"#FFFFFF"}}>유튜브 저장소</button><br/>
        <button type="button" className="btn btn-danger"style={{background:'#2F4F4F' ,width:'100%',color:"#000000"}}>입니다</button><br/>
        </div>
    </header>
  )
}
export default Header