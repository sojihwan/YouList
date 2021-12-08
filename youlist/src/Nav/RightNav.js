import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function RightNav (){
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  return(
    <nav style={{padding:"5px",background:'#DCDCDC',width:'20%',height:'550px',borderRadius:"20PX"}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>태그</strong>
        <br/>
          {text}
        <br/>
        <select className="btn btn-secondary dropdown-toggle" onChange={onChange} value={text} style={{textAlign:"center"}}>
          <option value="추천"  >추천</option>
          <option value="웃긴"  >웃긴</option>
          <option value="음악"  >음악</option>
          <option value="애니메이션"  >애니메이션</option>
          <option value="감상"  >감상</option>
          <option value="게임"  >게임</option>
          <option value="공부"  >공부</option>
          <option value="힐링"  >힐링</option>
        </select><br/>
        <strong>업로드</strong>
        <br/>
        <Link to="/uplode" style={{textDecoration:"none",color:"#000000"}}>
        <select className="btn btn-secondary dropdown-toggle"style={{textAlign:"center"}}>
          <option>웃긴-업로드</option>
          <option>음악-업로드</option>
          <option>애니메이션-업로드</option>
          <option>감상-업로드</option>
          <option>게임-업로드</option>
        </select>
        </Link>
        <br/>
        </h1>
    </nav>
  )
}
export default RightNav;