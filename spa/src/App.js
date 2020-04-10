import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/layout/Dashboard';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='row'  style={{ height: '100vh', width: '100%'}}>
          <div className='col-lg-2 d-flex'>
            <SideBar />
          </div>
          <div className='col-lg-8'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;