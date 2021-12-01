import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav (){
  return(
    <nav style={{background:'#DCDCDC',width:'20%',height:'550px',position:'absolute',top:'220px',left:'80%'}} className="center-block">
      <h2 style={{textAlign:'center'}}>
        <strong>이동</strong>
        <p>
        <br/>
        다음 영상<br/>
        영상이름<br/>
        <br/>
        </p>
        <Link to="/" style={{textDecoration:"none",color:"#000000"}}>리스트로</Link><br/>
        <br/>
        <p>
        이전 영상<br/>
        영상이름<br/>
        </p>
        </h2>
    </nav>
  )
}
export default Nav;