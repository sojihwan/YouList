import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function Listadd({listnum},props){
  function ls(){
      console.log(listnum)
      const ls=listnum
      console.log(ls)
  }
  return(
    <tr>
      <td onClick={() => props.setData(`${listnum.like}`)}><Link to="/View" style={{textDecoration:"none",color:"#FFFFFF"}}>{listnum.title}</Link></td>
      <td><button className='btn btn-default' style={{color:'#FFFFFF'}} onClick={ls}>삭제</button></td>
      <td style={{color:'#FFFFFF'}}>{listnum.tag}</td>
    </tr>
  );
}
export default Listadd