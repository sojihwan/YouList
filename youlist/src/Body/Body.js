import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

let num=0;

function Bady (props){
  function onClick() {
    num=num+1;
  }
  function list(){
    var MyListArry = [
      {'이름':[props.data],'태그':[props.data.tag]},
    ]
    buildTable(MyListArry)

    function buildTable(data){
      var table = document.getElementsByName("list1")
      for (let i = 0; i < data.length; i++) {
        
        var row = `<tr>
                      <td onClick={() => props.setData([props.data.like])}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>${data[i].이름}</td>
                      <td>회</td>
                      <td>#${data[i].태그}</td>
                   </tr>`
        table.innerHTML =row
      }
    }
  }

  return(
    <bady style={{paddingLeft:"10px",background:'#000000',width:'70%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">
      <table className="table table-striped" name="list1" style={{color:"#FFFFFF"}}>
        <th>이름</th>
        <th>dk</th>
        <th>태그</th>
        <tr>
          <td onClick={() => props.setData("LclObYwGj90")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>React 기초 0강 : 리액트왜 쓰는지 알려줌 (+ 수강시 필요 사전지식)</Link></td>
          <td>{num}회</td>
          <td>#공부 #리엑트</td>
        </tr>
        <tr>
        <td onClick={() => props.setData("x13D1gG3K-Q")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>🔥Best NCS Gaming Music 2020 Mix ♫ Top 50 NCS Songs, Trap x Bass x Dubstep x House ♫ Best Of EDM 2020</Link></td>
          <td>{num}회</td>
          <td>#음악 #신나는 #힐링</td>
        </tr>
        <tr>
        <td onClick={() => props.setData("aMaencWqIhY")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>I recreated Line Rider in 3D and the result feels cursed</Link></td>
          <td>{num}회</td>
          <td>#음악 #신나는 #힐링</td>
        </tr>
        <tr>
        <td onClick={() => props.setData("Y88ezQ8bpfE")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>I Synchronized my Minecraft World to Music</Link></td>
          <td>{num}회</td>
          <td>#음악 #신나는 #힐링</td>
        </tr>
        <tr>
        <td onClick={() => props.setData("5kq_gkOs3Y4")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>언더 플레이어 영화-FULL 【Undertale Comic Dub】</Link></td>
          <td>{num}회</td>
          <td>#애니메이션 #신나는</td>
        </tr>
        <tr>
        <td onClick={() => props.setData("a5jNUlwfGxg")}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}} onClick={onClick}>Minecraft Dreams (Music Sync - 4k60fps)</Link></td>
          <td>{num}회</td>
          <td>#음악 #신나는 #힐링</td>
        </tr>
      </table>
      <button className="btn btn-success"onClick={list} style={{backgroundColor:"#000000"}}><Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}}>reload</Link></button>
    </bady>
  )
}
export default Bady;