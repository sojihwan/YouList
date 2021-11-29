import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function View (props){
  const like =`https://www.youtube.com/embed/${props.name}`
  return(
    <bady style={{background:'#2F4F4F',width:'60%',height:'550px',position:'absolute',top:'220px',left:'30%'}} className="center-block">

     <iframe width="100%" height="100%" src={like} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </bady>
  )
}
export default View;