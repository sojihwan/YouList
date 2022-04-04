/* eslint-disable no-sequences */

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react'
import { Route } from 'react-router';
import Header from './Header/Header'
import RightNav from './Nav/RightNav'
import Body from './Body/Body'
import View from './Body/View';
import LeftNav from './Nav//LeftNav'
import Uplode from './Body/Uplode';
import Listadd from './Body/Listadd';
// axios 추가
import axios from 'axios';
 
function App() {

  // 서버에서 받은 데이터를 console로 찍어서 확인한다.
  return (
    <div style={{backgroundColor:"black"}}>
      <Header></Header>
      <div style={{width:'70%',position:'absolute',top:'220',left:'15%'}}>
      <RightNav></RightNav>
      <Route path ="/1qsdexbsgsdbs" component={()=><Listadd setData={setData}/>}/>
      <Route path ="/View"  component={()=> <View name={data}/>}/>
      <Route path ="/Uplode" component = {()=> <Uplode setDatas={setDatas}/>} />
      <LeftNav></LeftNav>
      <Route path ="/" component = {()=> <Body datads={datas}/>} exact/>
      </div>

    </div>
  );
}

export default App;

