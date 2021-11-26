import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Nav (){
  return(
    <nav style={{background:'#DCDCDC',width:'30%',height:'550px'}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>태그</strong>
        <br/>미완성
        <br/>
        <select multiple className="form-control">
          <option>추천</option>
          <option>웃긴</option>
          <option>음악</option>
          <option>애니메이션</option>
          <option>감상</option>
          <option>게임</option>
        </select>
        <strong>업로드</strong>
        <br/>
        <select multiple className="form-control">
          <option>웃긴-업로드</option>
          <option>음악-업로드</option>
          <option>애니메이션-업로드</option>
          <option>감상-업로드</option>
          <option>게임-업로드</option>
        </select>
        </h1>
    </nav>
  )
}
export default Nav;