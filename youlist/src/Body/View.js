import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function View (props){
  const like =`https://www.youtube.com/embed/${props.name}`
  return(
    <div style={{padding:"5px",background:'#000000',width:'70%',height:'550px',position:'absolute',top:'0px',left:'15%'}} className="center-block">

     <iframe width="100%" height="100%" src={like} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
export default View;