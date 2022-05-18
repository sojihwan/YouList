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
        <div>
          <Link to="/"className="Link1"><b>리스트로</b></Link><br/>
        </div>
        <div>
          <b>이전</b>
        </div>
        <div>
          <b>이전</b>
        </div>
        </h2>
    </nav>
  )
}
export default LeftNav;