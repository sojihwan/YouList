
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Route} from 'react-router-dom'
import Header from './Header/Header'
import RightNav from './Nav/RightNav'
import Body from './Body/Body'
import View from './Body/View';
import LeftNav from './Nav//LeftNav'

function App() {
  return (
    <div>
      <Header></Header>
      <RightNav></RightNav>
      
      <Route path ="/" component = {Body} exact/>
      <Route path ="/view" component = {View} />
      <Route path ="/view" component = {LeftNav} />
    </div>
  );
}

export default App;
