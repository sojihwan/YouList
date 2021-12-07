import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function Listadd({listnum},props){
  function aaaa(){
      console.log(props.setData)
      console.log(listnum)
  }
  return(
    <tr>
      <td onClick={() => props.setData(`${listnum.like}`)}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}}>{listnum.title}</Link></td>
      <td><button className='btn btn-default' style={{color:'#FFFFFF'}} onClick={aaaa}>삭제</button></td>
      <td style={{color:'#FFFFFF'}}>{listnum.tag}</td>
    </tr>
  );
}
export default Listadd