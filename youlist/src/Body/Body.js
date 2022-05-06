import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Listadd from './Listadd';
import '../CSS/Div.css'
import '../CSS/Link.css'
//앞으로 해야할 것 setLists([...lists, JSON.parse(localStorage.getItem(`${i}`))]);이게 왜 함수가 끝나야지 되는지 확인
//JSON.parse(localStorage.getItem(키))에 키를 리스트에서 view로 이동  
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
  const onadd = like => {
    //이동하는 코드 props사용 useState로 값이동
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
              listnum => (<Listadd listnum={listnum} key={listnum.like} onadd={onadd} onRemomve={onRemomve} />)
            )
          }
        </tbody>
      </table>
      <button className="btn btn-success" onClick={addlist} style={{ backgroundColor: "#000000" }}>reload</button>
    </div>
  )
}
export default React.memo(Body);