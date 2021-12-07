import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function RightNav (){
  const [Log, setLog] = useState({
    selectop:''
  });
  const {selectop}  = Log;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLog({
      ...Log,
      [name]: value,
    });
    console.log(selectop);
  };
  return(
    <nav style={{padding:"5px",background:'#DCDCDC',width:'20%',height:'550px',borderRadius:"20PX"}} className="center-block">
      <h1 style={{textAlign:'center'}}>
        <strong>태그</strong>
        <br/>
          {selectop}
        <br/>
        <select className="btn btn-secondary dropdown-toggle" onChange={onChange} value={selectop} style={{textAlign:"center"}}>
          <option value="추천" name="1" >추천</option>
          <option value="웃긴" name="2" >웃긴</option>
          <option value="음악" name="3" >음악</option>
          <option value="애니메이션" name="4" >애니메이션</option>
          <option value="감상" name="5" >감상</option>
          <option value="게임" name="6" >게임</option>
          <option value="공부" name="7" >공부</option>
          <option value="힐링" name="8" >힐링</option>
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