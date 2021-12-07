import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function View (props){
  const like =`https://www.youtube.com/embed/${props.name}`
  function ap1(){
      console.log(props)
  }
  return(
    <div style={{padding:"5px",background:'#000000',width:'60%',height:'550px',position:'absolute',top:'220px',left:'20%'}} className="center-block">

     <iframe width="100%" height="100%" src={like} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <button onClick={ap1}>testtest</button>
    </div>
  )
}
export default View;