import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import ReactHlsPlayer from 'react-hls-player';
import Main from './components/Main'
import Watch from './components/Watch';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  const [data,setData] = useState([]);
  return (
    <div className="App">
    <Router>   
    <Navbar data={data} setData={setData}/>
      <Route path='/' exact>
        <Main data={data} setData={setData}/>
      </Route>
      <Route path='/watch'>
        <Watch/>
      </Route>
    </Router>
    
    </div>
  );
}

export default App;
