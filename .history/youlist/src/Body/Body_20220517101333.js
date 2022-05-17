import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'
import '../CSS/Link.css'
//앞으로 해야할 것 setLists([...lists, JSON.parse(localStorage.getItem(`${i}`))]);이게 왜 함수가 끝나야지 되는지 확인
//JSON.parse(localStorage.getItem(키))에 키를 리스트에서 view로 이동  
function Body(props) {
  const [lists, setLists] = useState([ 
    // for(var i = 0; i <= localStorage.length-1; i++) {
        JSON.parse(localStorage.getItem(0)),
        JSON.parse(localStorage.getItem(1))
    // }
    ])
  function likeing(like){
    console.log(like);
    console.log(like);
    props.setValue(like);
  }
  
  const onRemomve = like => {
    setLists(lists.filter(lists => lists.like !== like));
    window.localStorage.removeItem(2);
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
            lists.map((item) => {
              return(
                <tr>
                  <td key={item.like} onClick={likeing(item.like)} className="Link">{item.title}</td>
                  <td><button className='btn btn-default' style={{color:'#FFFFFF',width:'60px'}} onClick={()=>onRemomve(item.like)}>삭제</button></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  )
}
export default React.memo(Body);