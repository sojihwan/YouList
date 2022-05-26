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
        <div className='LeftNavDiv'>
          <Link to="/"className="Link1"><b>리스트로</b></Link><br/>
        </div>
        <div className='LeftNavDiv'>
          <b><Link to="/View" className="Link1" n e={{no : -1}}>이전<br/>영상</Link></b>
        </div>
        <div className='LeftNavDiv'>
          <b><Link to="/View" className="Link1" ne={{no : 1}}>다음<br/>영상</Link></b>
        </div>
        </h2>
    </nav>
  )
}
export default LeftNav;