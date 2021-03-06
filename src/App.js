import React, {Component} from 'react'
import Navbar from './components/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Todo from './components/todo'

import './index.css'



class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path="/:post_id" component={Todo} />
        </Switch>
        
      </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;
