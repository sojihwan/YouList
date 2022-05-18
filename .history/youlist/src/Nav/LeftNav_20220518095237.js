import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function LeftNav (props){
  function beforepage(){
    // if(a===0){
    //   return 0;
    // }
    // a = a + 1;
    // b = b + 1;
    // c = c + 1;
    // d = d + 1;
    // e = e + 1;
    // f = f + 1;
    // g = g + 1;
  }
  function nextpage(){
    // a = a + 1;
    // b = b + 1;
    // c = c + 1;
    // d = d + 1;
    // e = e + 1;
    // f = f + 1;
    // g = g + 1;
  }
  return(
    <nav className="LeftNav">
      <h2 className='LeftH1'>
        <strong>이동</strong>
        <div className='LeftNavDiv'>
          <Link to="/"className="Link1"><b>리스트로</b></Link><br/>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={beforepage}>이전</b><br/>
          <b onClick={beforepage}>페이지</b>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={nextpage}>다음</b><br/>
          <b onClick={nextpage}>페이지</b>
        </div>
        </h2>
    </nav>
  )
}
export default LeftNav;