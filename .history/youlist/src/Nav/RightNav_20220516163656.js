import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function RightNav (){

  return(
    <nav className="RightNav">
      <h1 style={{textAlign:'center'}}>
        <strong>업로드</strong>
        <br/>
        <Link to="/uplode"className="Link1">
        <select className="btn btn-secondary dropdown-toggle"style={{textAlign:"center"}}>
          <option>업로드</option>
          <option>음악</option>
          <option>애니메이션</option>
          <option>감상</option>
          <option>게임</option>
        </select>
        </Link>
        <br/>
        </h1>
    </nav>
  )
}
export default RightNav;