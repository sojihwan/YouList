import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Header (){
  return(
    <header style={{background:'#2F4F4F',height:'220px'}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>Youlist</strong>
        <br/>당신을 위한 유튜브 모음 사이트 
        <br/>
        </h1>
        <div>
        <button type="button" className="btn btn-success"style={{background:'#2F4F4F' ,width:'100%',color:"#000000"}}>join</button><br/>
        <button type="button" className="btn btn-warning"style={{background:'#2F4F4F' ,width:'100%'}}><Link to="/LogIn" style={{textDecoration:"none",color:"#000000"}}>log-in</Link></button><br/>
        <button type="button" className="btn btn-danger"style={{background:'#2F4F4F' ,width:'100%',color:"#000000"}}>log-out</button><br/>
        </div>
    </header>
  )
}
export default Header