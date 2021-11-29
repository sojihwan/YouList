import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

let num=0;

function Bady (){
  function onClick() {
    num=num+1;
  }
  return(
    <bady style={{background:'#2F4F4F',width:'70%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">
      <table className="table table-striped">
        <th>이름</th>
        <th>조회수</th>
        <th>태그</th>
        <tr>
          <td onClick={onClick}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}}>React 기초 0강 : 리액트왜 쓰는지 알려줌 (+ 수강시 필요 사전지식)</Link></td>
          <td>{num}회</td>
          <td>#공부 #리엑트</td>
        </tr>
        <tr>
        <td onClick={onClick}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}}>🔥Best NCS Gaming Music 2020 Mix ♫ Top 50 NCS Songs, Trap x Bass x Dubstep x House ♫ Best Of EDM 2020</Link></td>
          <td>{num}회</td>
          <td>#공부 #리엑트</td>
        </tr>
      </table>
    </bady>
  )
}
export default Bady;