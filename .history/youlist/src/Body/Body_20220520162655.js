import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'
import '../CSS/Link.css'
import { Link } from 'react-router-dom';

export function Body(props) {

  let a = [0,1,2,3,4,5,6,7];
  const [lists, setLists] = useState([ 
        JSON.parse(localStorage.getItem(a[0])),
        JSON.parse(localStorage.getItem(a[1])),
        JSON.parse(localStorage.getItem(a[2])),
        JSON.parse(localStorage.getItem(a[3])),
        JSON.parse(localStorage.getItem(a[4])),
        JSON.parse(localStorage.getItem(a[5])),
        JSON.parse(localStorage.getItem(a[6])),
        JSON.parse(localStorage.getItem(a[7]))
    ]);
   const [Pnum,setPNum] = useState(0);
    function beforepage(){
      if(Pnum===0 || Pnum<=0 ){
        setPNum(0)
        NaxtsetLists();
        alert('이전 페이지는 없습니다.')
        return 0;
      }
      for(let addnum=0;addnum<=Pnum-2; addnum++){
        a[0] = a[0] + 8;
        a[1] = a[1] + 8;
        a[2] = a[2] + 8;
        a[3] = a[3] + 8;
        a[4] = a[4] + 8;
        a[5] = a[5] + 8;
        a[6] = a[6] + 8;
        a[7] = a[7] + 8;
      }
      console.log(a)
      setPNum(Pnum-1)
      NaxtsetLists()
    }
    function NaxtsetLists(){
      setLists([
        JSON.parse(localStorage.getItem(a[0])),
        JSON.parse(localStorage.getItem(a[1])),
        JSON.parse(localStorage.getItem(a[2])),
        JSON.parse(localStorage.getItem(a[3])),
        JSON.parse(localStorage.getItem(a[4])),
        JSON.parse(localStorage.getItem(a[5])),
        JSON.parse(localStorage.getItem(a[6])),
        JSON.parse(localStorage.getItem(a[7])) 
      ]);
    }
    function nextpage(){  
      setPNum(Pnum+1)
      a.map(){
        a[0] = a[0] + 8;
        a[1] = a[1] + 8;
        a[2] = a[2] + 8;
        a[3] = a[3] + 8;
        a[4] = a[4] + 8;
        a[5] = a[5] + 8;
        a[6] = a[6] + 8;
        a[7] = a[7] + 8;
      }
      if(JSON.parse(localStorage.getItem(a[0]))===null){
        alert("다음 페이지는 없습니다.");
        return 0;
      }
      console.log(a)
      NaxtsetLists()
    }
 
    const onRemomve = like => {
    var i = 0;
    var s
    for(i=0;i<=localStorage.length-1;i++){
      s = JSON.parse(localStorage.getItem(`${i}`));
      if(s.like === like){
        break;
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
      <button onClick={nextpage}>다음</button>
      <button onClick={beforepage}>이전</button>
    </div>
  )
}

export default React.memo(Body);