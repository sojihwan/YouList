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
        <br/> 
        <div>
          <b>페이지<br/>이동</b>
        <select className="btn btn-secondary dropdown-toggle"style={{textAlign:"center"}}>
          <option value={1}>1페이지</option>
          <option value={2}>2페이지</option>
          <option value={3}>3페이지</option>
          <option value={4}>4페이지</option>
        </select>
        </div>
        </h1>
    </nav>
  )
}
export default RightNav;