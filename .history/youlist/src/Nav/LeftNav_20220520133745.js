import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'
import * as Body from '../Body/Body';

function LeftNav (props){
  
  return(
    <nav className="LeftNav">
      <h2 className='LeftH1'>
        <strong>이동</strong>
        <div className='LeftNavDiv'>
          <Link to="/"className="Link1"><b>처음으로</b></Link><br/>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={Body}>이전</b><br/>
          <b onClick={Body}>페이지</b>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={Body}>다음</b><br/>
          <b onClick={Body.nextpage()}>페이지</b>
        </div>
        </h2>
    </nav>
  )
}
export default LeftNav;