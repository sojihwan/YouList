
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

  const [data, setData] = useState("initial data");
  

  return (
    <div>

      <Header></Header>
      <RightNav></RightNav>
      <Route path ="/View"  component={()=> <View name={data}/>}/>
      <Route path ="/Uplode" component = {()=> <Uplode setData={setData}/>} />
      <LeftNav></LeftNav>
      <Route path ="/" component = {()=> <Body setData={setData}/>} exact/>
    </div>
  );
}

export default App;
