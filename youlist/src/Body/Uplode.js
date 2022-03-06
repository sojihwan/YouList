/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../CSS/Div.css'

function Uplode(props) {
  const [Log, setLog] = useState({
    title: "",
    tag:"",
    like:""
  });
  const {title,like,tag} = Log;

  const onChange = (e) => {
    const { name, value } = e.target;
    setLog({
      ...Log,
      [name]: value,
    });
    console.log(Log);
  };

  const onReset = () => {
    if(title===""||like===""){
      alert("링크 또는 제목이 비어있습니다.");
    }
  };
  return(
    <div className="Uplodediv">
      <h3>제목</h3><br/>
      <input 
          type="text"
          style={{width:"70%",}} 
          name="title"
          onChange={onChange} 
          value={title} 
      />
       <br/>
      <h3>맨 뒤 / 다음 링크</h3><br/>
      <input 
        type="text"
        style={{width:"70%"}} 
        name="like" 
        onChange={onChange} 
        value={like}
      /><br/>
      <h3>태그</h3><br/>
      <input 
        type="text"
        style={{width:"70%"}} 
        name="tag" 
        value={tag} 
        onChange={onChange}
      /><br/>
        <button 
          className="btn btn-warning" 
          style={{width:"100px",height:"50px",background:'#000000',position:'absolute',top:"80%",left:"35%"}}

          onClick={onReset}
          >
            <Link to="/"style={{textDecoration:"none",color:"#FFFFFF"}}onClick={() =>props.setDatas([{title},{like},{tag}]), localStorage.setItem('key', props.setDatas([{title},{like},{tag}]))}>
              올리기
            </Link>
        </button>
    </div>
  )
}







export default Uplode 