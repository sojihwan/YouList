import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function LeftNav (props){
  function next(){

  }
  return(
    <nav className="LeftNav">
      <h2 className='LeftH1'>
        <strong>이동</strong>
        <p>
        <br/>
        <Link to="View" className='Link1'>
        <b>다음 영상</b><br/>
        neitem.title<br/>
        </Link>
        <br/>
        </p>
        <Link to="/"className="Link1">리스트로</Link><br/>
        <br/>
        <p>
        <b>이전 영상</b><br/>
        beitem.title<br/>
        </p>
        </h2>
    </nav>
  )
}
export default LeftNav;