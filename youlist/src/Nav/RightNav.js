import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav (){
  return(
    <nav style={{padding:"5px",background:'#DCDCDC',width:'30%',height:'550px',borderRadius:"20PX"}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>태그</strong>
        <br/>미완성
        <br/>
        <select className="form-control" style={{textAlign:"center"}}>
          <option>추천</option>
          <option>웃긴</option>
          <option>음악</option>
          <option>애니메이션</option>
          <option>감상</option>
          <option>게임</option>
          <option>공부</option>
          <option>힐링</option>
        </select>
        <strong>업로드</strong>
        <br/>
        <Link to="/uplode" style={{textDecoration:"none",color:"#000000"}}>
        <select className="form-control"style={{textAlign:"center"}}>
          <option>웃긴-업로드</option>
          <option>음악-업로드</option>
          <option>애니메이션-업로드</option>
          <option>감상-업로드</option>
          <option>게임-업로드</option>
        </select>
        </Link>
        </h1>
    </nav>
  )
}
export default Nav;