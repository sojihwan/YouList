import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../CSS/Div.css'
import '../CSS/Link.css'

function LeftNav (props){
  function NV(){

  }
  function BV(){
    
  }
  return(
    <nav className="LeftNav">
      <h2 className='LeftH1'>
        <strong>이동</strong>
        <div className='LeftNavDiv'>
          <Link to="/"className="Link1"><b>리스트로</b></Link><br/>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={NV(props)}><Link to="/"className="Link1">이전영상</Link></b>
        </div>
        <div className='LeftNavDiv'>
          <b onClick={BV(props)}>다음</b><br/>
          <b onClick={BV(props)}>영상</b>
        </div>
        </h2>
    </nav>
  )
}
export default LeftNav;