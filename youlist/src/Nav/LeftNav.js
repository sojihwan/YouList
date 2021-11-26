import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav (){
  return(
    <nav style={{background:'#DCDCDC',width:'10%',height:'550px',position:'absolute',top:'220px',left:'90%'}} className="center-block">
      <h2 style={{textAlign:'center'}}>
        <strong>이동</strong>
        <button className="btn btn-success"style={{width:'100%'}}>앞으로</button>
        <br/>
        <button className="btn btn-success"style={{width:'100%'}}><Link to="/" style={{textDecoration:"none",color:"#000000"}}>리스트로</Link></button>
        <br/>
        <button className="btn btn-success"style={{width:'100%'}}>뒤로</button>
        </h2>
    </nav>
  )
}
export default Nav;