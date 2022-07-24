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


function App() {
  const [value, setValue] = useState("");
  return (
    <div style={{backgroundColor:"black"}}>
      <Header/>
      <div style={{width:'70%',position:'absolute',top:'220',left:'15%'}}>
      <RightNav/>
      <Route path ="/View"  component={() => <View value={value}/>}/>
      <Route path ="/Uplode" component = {()=> <Uplode/>} />
      <LeftNav setValue={setValue}/>
      <Route path ="/" component = {()=> <Body setValue={setValue}/>} exact/>
      </div>
    </div>
  );
}

export default App;
