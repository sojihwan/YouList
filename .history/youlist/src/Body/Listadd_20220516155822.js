/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Link.css'

function Listadd({listnum,onRemomve},props){
  function sendData(){
    props.setValue(`${listnum.like}`);
  }
  return(
    <tr>
      <td><Link to="/View" className="Link" onClick={sendData}>{listnum.title}</Link></td>
      <td><button className='btn btn-default' style={{color:'#FFFFFF',width:'60px'}} onClick={()=>onRemomve(listnum.like)}><Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}}>삭제</Link></button></td>
    </tr>
  );
}
export default React.memo(Listadd);