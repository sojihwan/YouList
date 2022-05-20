import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Div.css'
import '../CSS/Link.css'
import { Link } from 'react-router-dom';

export function Body(props) {

  let a = [0,1,2,3,4,5,6,7];
  const [lists, setLists] = useState([ 
        JSON.parse(localStorage.getItem(a[0])),
        JSON.parse(localStorage.getItem(a[0])),
        JSON.parse(localStorage.getItem(c)),
        JSON.parse(localStorage.getItem(d)),
        JSON.parse(localStorage.getItem(e)),
        JSON.parse(localStorage.getItem(f)),
        JSON.parse(localStorage.getItem(g)),
        JSON.parse(localStorage.getItem(j))
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
        a = a + 8;
        b = b + 8;
        c = c + 8;
        d = d + 8;
        e = e + 8;
        f = f + 8;
        g = g + 8;
        j = j + 8;
      }
      console.log(a)
      setPNum(Pnum-1)
      NaxtsetLists()
    }
    function NaxtsetLists(){
      setLists([
        JSON.parse(localStorage.getItem(a)),
        JSON.parse(localStorage.getItem(b)),
        JSON.parse(localStorage.getItem(c)),
        JSON.parse(localStorage.getItem(d)),
        JSON.parse(localStorage.getItem(e)),
        JSON.parse(localStorage.getItem(f)),
        JSON.parse(localStorage.getItem(g)),
        JSON.parse(localStorage.getItem(j))  
      ]);
    }
    function nextpage(){  
      setPNum(Pnum+1)
      for(let addnum=0;addnum<=Pnum; addnum++){
        a = a + 8;
        b = b + 8;
        c = c + 8;
        d = d + 8;
        e = e + 8;
        f = f + 8;
        g = g + 8;
        j = j + 8;
      }
      if(JSON.parse(localStorage.getItem(a))===null){
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