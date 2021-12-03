/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
import React,{useState} from "react";
import { Link } from "react-router-dom";

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
      alert("링크 또는 제목이 비어있습니다.")
    }
  };
  return(
    <bady style={{padding:"10px",background:'#000000',width:'60%',height:'550px',position:'absolute',top:'220px',left:'30%',color:"#FFFFFF"}} className="center-block">
      <h3>제목</h3><br/>
      <input 
          type="text"
          style={{width:"90%",}} 
          name="title"
          onChange={onChange} 
          value={title} 
      />
       <br/>
      <h3>맨 뒤 / 다음 링크</h3><br/>
      <input 
        type="text"
        style={{width:"90%"}} 
        name="like" 
        onChange={onChange} 
        value={like}
      /><br/>
      <h3>태그</h3><br/>
      <input 
        type="text"
        style={{width:"90%"}} 
        name="tag" 
        value={tag} 
        onChange={onChange}
      /><br/>
      <button 
        className="btn btn-warning" 
        style={{width:"100px",height:"50px",background:'#000000'}}
        onClick={onReset}
        >
          <Link to="/"style={{textDecoration:"none",color:"#FFFFFF"}}onClick={() =>props.setDatas([{title},{like},{tag}])}>
            올리기
          </Link>
      </button>
    </bady>
  )
}

export default Uplode 