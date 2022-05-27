import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Routes,Route, Switch, NavLink, Link } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
       <Navigation/>
   <Routes>
     <Route  path="/"  element={<Home/>}/>
   </Routes>
    
    </div>
  );
}

export default App;
