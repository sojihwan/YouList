import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'
import '../CSS/Link.css'
import { Link } from 'react-router-dom';
//앞으로 해야할 것 setLists([...lists, JSON.parse(localStorage.getItem(`${i}`))]);이게 왜 함수가 끝나야지 되는지 확인
//JSON.parse(localStorage.getItem(키))에 키를 리스트에서 view로 이동  
function Body(props) {
  var a = 0;
  var b = 1;
  var c = 2;
  var d = 3;
  var e = 4;
  var f = 5;
  var g = 6;
  const [lists, setLists] = useState([ 
    //  for(var i = 0; i <= localStorage.length-1; i++) {
        JSON.parse(localStorage.getItem(a)),
        JSON.parse(localStorage.getItem(b)),
        JSON.parse(localStorage.getItem(c)),
        JSON.parse(localStorage.getItem(d)),
        JSON.parse(localStorage.getItem(e)),
        JSON.parse(localStorage.getItem(f)),
        JSON.parse(localStorage.getItem(g))
    //  }
    ])
  
  const onRemomve = like => {
    var i = 0;
    var s
    for(i=0;i<=localStorage.length-1;i++){
      s = JSON.parse(localStorage.getItem(`${i}`));
      if(s.like === like){
        break
      }
    }
    localStorage.removeItem(i);
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
            lists.map((item,index) => {
              return(
                <tr key={index}>
                  <td> 
                    <Link to="/View" className="Link">
                      <b onClick={() =>{if(item != null){props.setValue(item.like)}}}>
                       {item===null ? '업로드를 해주세요' : item.title }
                      </b>
                    </Link>
                  </td>
                  <td><button className='btn btn-default' style={{color:'#FFFFFF',width:'60px'}} onClick={()=>{if(item !== null){onRemomve(item.like)}}}>삭제</button></td>
                </tr>
              );
            }
            )
            }
        </tbody>
      </table>
    </div>
  )
}
export default React.memo(Body);