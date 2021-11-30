/* eslint-disable no-sequences */
import React,{useState} from "react";

function Uplode(props) {
  const [Log, setLog] = useState({
    title: '',
    like: '',
    tag:'',
  });

  const { title,like,tag  } = Log; 

  const onChange = (e) => {
 const { title, value } = e.target;   
    setLog({
      ...Log,
      [title]:value,
    });
 };

  const onReset = () => {
    if(title===""||like===""){
      alert("링크 또는 제목이 비어있습니다.")
    }
    setLog({
      title:"",
      like:"",
      tag:""
    })
  };
  return(
    <bady style={{background:'#2F4F4F',width:'60%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">
      <h3>제목</h3><br/>
      <input 
          type="text"
          style={{width:"90%"}} 
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
        style={{width:"100px",height:"50px",background:'#2F4F4F'}}
        onClick={() => props.setData(),onReset}>
          올리기
      </button>
    </bady>
  )
}

export default Uplode