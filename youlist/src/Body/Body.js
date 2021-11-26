import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Bady (){
  return(
    <bady style={{background:'#2F4F4F',width:'70%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">
      <table className="table table-striped">
        <th>이름</th>
        <th>조회수</th>
        <th>댓글</th>
        <th>태그</th>
        <tr>
          <td><Link to="/View" style={{textDecoration:"none",color:"#000000"}}>React 기초 0강 : 리액트왜 쓰는지 알려줌 (+ 수강시 필요 사전지식)</Link></td>
          <td>63,531회</td>
          <td>xx회</td>
          <td>#공부 #리엑트</td>
        </tr>
        <tr>
          <td>테스트</td>
          <td>테스트</td>
          <td>테스트</td>
          <td>테스트</td>
        </tr>
      </table>
    </bady>
  )
}
export default Bady;