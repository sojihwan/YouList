import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function Listadd({listnum},props){
  function aaaa(){
    console.log(props.setData)
    console.log(listnum)
  }
  return(
    <tr>
      <td onClick={() => props(listnum.like)}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}}>{listnum.title}</Link></td>
      <td><button className='btn btn-default' style={{color:'#FFFFFF'}} onClick={aaaa}>삭제</button></td>
      <td style={{color:'#FFFFFF'}}>{listnum.tag}</td>
    </tr>
  );
}
// function test() {
//   console.log('보고싶다 props ');
// }



function Body (props){
  const [lists,setLists] =useState([
    {
      title:'React 기초 0강 : 리액트왜 쓰는지 알려줌 (+ 수강시 필요 사전지식)',
      like:'LclObYwGj90',
      tag:'#공부 #리엑트'
    },
    {
      title:'🔥Best NCS Gaming Music 2020 Mix ♫ Top 50 NCS Songs, Trap x Bass x Dubstep x House ♫ Best Of EDM 2020',
      like:'x13D1gG3K-Q',
      tag:'#음악 #신나는 #힐링'
    },
    {
      title:'I recreated Line Rider in 3D and the result feels cursed',
      like:'aMaencWqIhY',
      tag:'#음악 #신나는 #힐링'
    },
    {
      title:'I Synchronized my Minecraft World to Music',
      like:'Y88ezQ8bpfE',
      tag:'#음악 #신나는 #힐링'
    },
    {
      title:'언더 플레이어 영화-FULL 【Undertale Comic Dub】',
      like:'5kq_gkOs3Y4',
      tag:'#게임 #애니메이션'
    },
    {
      title:'Minecraft Dreams',
      like:'a5jNUlwfGxg',
      tag:'#음악 #신나는 #힐링'
    },
    
  ])
  const addlist = () =>{
    console.log(props.datads)
    if(props.datads && props.datads.length > 0) {
			console.log(props.datads[0]);
      const list = {
        title:Object.values(props.datads[0]),
        like:Object.values(props.datads[1]),
        tag:Object.values(props.datads[2])
      }
              
      console.log(list)
  setLists([...lists,list])
      console.log(lists)
    };
  }
  return(
    <div style={{paddingLeft:"10px",background:'#000000',width:'60%',height:'550px',position:'absolute',top:'220px',left:'20%'}} className="center-block">
        <table className="table table-striped" name="list1" style={{color:"#FFFFFF"}}>
          <thead>
            <tr>
              <th>이름</th>
              <th>삭제</th>
              <th>태그</th>
            </tr>
          </thead>
          <tbody>
            {
              lists.map(
                listnum => (<Listadd listnum={listnum} props={props.setData} key={listnum.like}/>)
              )
            }
          </tbody>
        </table>
        <button className="btn btn-success"onClick={addlist} style={{backgroundColor:"#000000"}}>reload</button>
    </div>
  )
}
export default Body;