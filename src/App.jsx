import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import header  from './components/header/Header';
import home from './components/home/Home';
import blogLanding from './components/blog/BlogLanding';
import './App.css'

class App extends React.Component {
  render(){
    return(
          <div className="App-Content">
              <header />
              <Switch>
                <Route exact = {true} path="/" component={home} />
                <Route path="/blog" component={blogLanding} />
              </Switch>
          </div>
    );
  }
}

export default App;
