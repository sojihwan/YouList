import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function View (props){
  const like =`https://www.youtube.com/embed/${props.name}`
  function ap1(){
  }
  return(
    <div style={{padding:"5px",background:'#000000',width:'60%',height:'550px',position:'absolute',top:'220px',left:'20%'}} className="center-block">

     <iframe width="100%" height="100%" src={like} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button onClick={ap1}></button>
    </div>
  )
}
export default View;