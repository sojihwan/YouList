import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Listadd from './Listadd';
import '../CSS/Div.css'
import '../CSS/Link.css'

function Body() {
  const [lists, setLists] = useState([
  ])
  const addlist = () => {
    for (var i = 0; i < localStorage.length; i++) {
      setLists([...lists, JSON.parse(localStorage.getItem(`${i}`))]);
    }
    console.log(lists)  
  }
  const onRemomve = like => {
    setLists(lists.filter(lists => lists.like !== like));
    console.log(lists);
  }
  return (
    <div className="Bodydiv">
      <table className="table table-striped" style={{ color: "#FFFFFF" }} name="list1" >
        <thead>
          <tr>
            <th>이름</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            lists.map(
              listnum => (<Listadd listnum={listnum} key={listnum.like} onRemomve={onRemomve} />)
            )
          }
        </tbody>
      </table>
      <button className="btn btn-success" onClick={addlist} style={{ backgroundColor: "#000000" }}>reload</button>
    </div>
  )
}
export default React.memo(Body);