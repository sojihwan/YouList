import '../CSS/Div.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function View (props){
  console.log(props)
  const like =`https://www.youtube.com/embed/n8X9_MgEdCg`
  return(
    <div className='DIVVIEW'>

     <iframe width="100%" height="100%" src={like} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
export default View;