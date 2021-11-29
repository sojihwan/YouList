
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route} from 'react-router-dom'
import Header from './Header/Header'
import RightNav from './Nav/RightNav'
import Body from './Body/Body'
import View from './Body/View';
import LeftNav from './Nav//LeftNav'
import LogInPage from './LogIn/LogInPage'
import Uplode from './Body/Uplode';

function App() {
  return (
    <div>

      <Header></Header>
      <RightNav></RightNav>
      <Route path ="/view"  component={()=> <View name="x13D1gG3K-Q"/>}/>
      <Route path ="/LogIn" component = {LogInPage}/>
      <Route path ="/Uplode" component = {Uplode} />
      <LeftNav></LeftNav>
      <Route path ="/" component = {Body} exact/>
    </div>
  );
}

export default App;
