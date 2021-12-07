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

function App() {

    const [data, setData] = useState('');
  const [datas, setDatas] = useState([]);
  const a = () => {
    console.log(data)
    console.log(data)
    console.log(setData)
  }
  return (
    <div style={{backgroundColor:"black"}}>
      <Header></Header>
      <RightNav></RightNav>
      <Route path ="/1qsdexbsgsdbs" component={()=><Listadd setData={setData}/>}/>
      <Route path ="/View"  component={()=> <View name={data}/>}/>
      <Route path ="/Uplode" component = {()=> <Uplode setDatas={setDatas}/>} />
      <LeftNav></LeftNav>
      <Route path ="/" component = {()=> <Body datads={datas}/>} exact/>
      <button onClick={a}>aaa</button>
    </div>
  );
}

export default App;
