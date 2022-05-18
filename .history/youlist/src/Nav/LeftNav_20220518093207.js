import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function LeftNav (props){
  return(
    <nav className="LeftNav">
      <h2 className='LeftH1'>
        <strong>이동</strong>
        <Link to="/"className="Link1">리스트로</Link><br/>
        <br/>
        <p>
        <b>이전</b><br/>
        </p>
        <br/>
        <b>이전</b><br/>
        </h2>
    </nav>
  )
}
export default LeftNav;