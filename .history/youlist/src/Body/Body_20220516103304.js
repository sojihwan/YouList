import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Listadd from './Listadd';
import '../CSS/Div.css'
import '../CSS/Link.css'
//앞으로 해야할 것 setLists([...lists, JSON.parse(localStorage.getItem(`${i}`))]);이게 왜 함수가 끝나야지 되는지 확인
//JSON.parse(localStorage.getItem(키))에 키를 리스트에서 view로 이동  
function Body(props) {
  const [lists, setLists] = useState([])
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  var i=0
  const addlist = () => {
    for(i = 0; i < localStorage.length; i++){
      const key = window.localStorage.key(i);
      console.log(JSON.parse(localStorage.getItem(`${key}`)))  
      console.log(i)
      setLists([...lists, JSON.parse(localStorage.getItem(`${key}`))]);
    }
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
              listnum => (<Listadd listnum={listnum} key={listnum} onRemomve={onRemomve} />)
              )
            }
        </tbody>
      </table>
      <button className="btn btn-success" onClick={addlist} style={{ backgroundColor: "#000000", position:"absolute",top:"80%"}}>reload</button>
    </div>
  )
}
export default React.memo(Body);