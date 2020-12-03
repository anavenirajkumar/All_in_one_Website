import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';   // Import ------------------------
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Extra from './components/Extra/Extra';
import Footer from './components/footer/Footer';

class App extends React.Component{
  constructor(props) {
      super(props);  // Importtant------------
  }

  render() {
      return (
          <div className="App">
             <Router>
                 <Navbar></Navbar>
                 <Switch>
                   <Route exact path="/" component={Home}></Route>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/about" component={About}/>
                     <Route exact path="/extra" component={Extra}/>
                 </Switch>
                 
                 <Footer></Footer>
             </Router>
          </div>
      );
  }

}

export default App;

