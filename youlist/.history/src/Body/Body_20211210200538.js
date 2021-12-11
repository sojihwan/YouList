import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Listadd from './Listadd';
import '../CSS/Div.css'
import '../CSS/Link.css'

function Body (props){
  const [lists,setLists] =useState([
    {
      title:'[북유럽 신화] 5분마다 뚝배기 깨는 북유럼 신화,한 번에 몰아보기!| 그재무지 시리즈',
      like:'FjejlcqqQlU',
      tag:'#신화 #와빌님'
    },
    {
      title:'[이집트 신화]5분마다 성스러운 이집트 신화, 한 번에 몰아보기!| 그재무지 시리즈',
      like:'vocNhmB3mn0',
      tag:'#신화 #와빌님'
    },
    {
      title:'[포켓몬스터 괴담]#12파면 팔수록 진짜 그럴듯한 포켓몬 괴담들',
      like:'CLPF195trwM',
      tag:'#포켓몬 #와빌님 #괴담'
    },
    {
      title:'2021 와빌 채널 최다 질문! 언제 나오고 어떻게 만났냐면요ㅎㅎ',
      like:'JxjxAXQXVHM',
      tag:'#QNA #와빌님 #럭키컵케이크님'
    },
    {
      title:'[NEW 메소포타미아 신화]#1 천지창조&신들의 탄생| 그재무지 시리즈',
      like:'taXaNvMlb4k',
      tag:'#와빌님 #신화'
    },
    {
      title:'[NEW 메소포타미아 신화]#2 사랑과 전쟁 엔키❤닌후륵상 | 시리즈 (수정)',
      like:'6TAeopqW7oU',
      tag:'#와빌님 #신화'
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
  const onRemomve = like=>{
    setLists(lists.filter(lists => lists.like !== like))
  }
  const onView = link => {
    props.setData=link
  }
  return(
    <div className="Bodydiv">
        <table className="table table-striped" style={{color:"#FFFFFF"}} name="list1" >
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
                listnum => (<Listadd listnum={listnum} key={listnum.like} onView={onView} onRemomve={onRemomve}/>)
              )
            }
          </tbody>
        </table>
        <button className="btn btn-success"onClick={addlist} style={{backgroundColor:"#000000"}}>reload</button>
    </div>
  )
}
export default React.memo(Body);