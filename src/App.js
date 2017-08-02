import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header  from './components/header/header';
import Home from './components/home/home';
import BlogLanding from './components/blog/bloglanding';
import './App.css'

class App extends React.Component {
  render(){
    return(
          <div className="App-Content">
              <Header/>
              <Switch>
                <Route exact = {true} path="/" component={Home}/>
                <Route path="/blog" component={BlogLanding}/>
              </Switch>
          </div>
    );
  }
}

export default App;
