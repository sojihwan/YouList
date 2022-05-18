import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function RightNav (){

  return(
    <nav className="RightNav">
      <h1 style={{textAlign:'center'}}>
        <br/>
        <Link to="/uplode"className="Link1">
        <strong>업로드</strong>
        </Link>
        <br/>
        <br/>
        <br/>
        <div>
          <b>페이지 이동</b>
        </div>
        </h1>
    </nav>
  )
}
export default RightNav;