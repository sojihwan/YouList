import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Listadd from './Listadd';
import '../CSS/Div.css'
import '../CSS/Link.css'

function Body (){
  const [lists,setLists] =useState([
    
    {
      title:'React 기초 0강 : 리액트왜 쓰는지 알려줌 (+ 수강시 필요 사전지식)',
      like:'LclObYwGj90'
    }
  ])
  const addlist = () =>{
      const list = localStorage.getItem("1");
      console.log(list);
  setLists([...lists,list]);
      console.log(lists)
  }
  const onRemomve = like=>{
    setLists(lists.filter(lists => lists.like !== like))
  }
  return(
    <div className="Bodydiv">
        <table className="table table-striped" style={{color:"#FFFFFF"}} name="list1" >
          <thead>
            <tr>
              <th>이름</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {
              lists.map(
                listnum => (<Listadd listnum={listnum} key={listnum.like} onRemomve={onRemomve}/>)
              )
            }
          </tbody>
        </table>
        <button className="btn btn-success"onClick={addlist} style={{backgroundColor:"#000000"}}>reload</button>
    </div>
  )
}
export default React.memo(Body);