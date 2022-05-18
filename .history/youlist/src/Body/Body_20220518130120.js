import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'
import '../CSS/Link.css'
import { Link } from 'react-router-dom';

//앞으로 해야할거 function beforepage() 와 function nextpage() 함수 LeftNav에서 불러오기 
//RightNav에서 원하는 페이지로 갈 수 있는 드롭박스 만들기

function Body(props) {
  var a = 0;
  var b = 1;
  var c = 2;
  var d = 3;
  var e = 4;
  var f = 5;
  var g = 6;
  var j = 7;
  const [lists, setLists] = useState([ 
        JSON.parse(localStorage.getItem(a)),
        JSON.parse(localStorage.getItem(b)),
        JSON.parse(localStorage.getItem(c)),
        JSON.parse(localStorage.getItem(d)),
        JSON.parse(localStorage.getItem(e)),
        JSON.parse(localStorage.getItem(f)),
        JSON.parse(localStorage.getItem(g)),
        JSON.parse(localStorage.getItem(j))
    ])
    function beforepage(){
      if(a===0){
        alert('이전 페이지는 없습니다.')
        return 0;
      }
      a = a - 8;
      b = b - 8;
      c = c - 8;
      d = d - 8;
      e = e - 8;
      f = f - 8;
      g = g - 8;
      j = j - 8;
    }
    function nextpage(){
      a = a + 8;
      b = b + 8;
      c = c + 8;
      d = d + 8;
      e = e + 8;
      f = f + 8;
      g = g + 8;
      j = j + 8;
    }
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
      <button>다음</button>
      <button>이전</button>
    </div>
  )
}
export default React.memo(Body);