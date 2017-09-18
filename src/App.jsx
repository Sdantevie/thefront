import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Head  from './components/header/Header';
import Home from './components/home/Home';
import BlogLanding from './components/blog/BlogLanding';
import Footer from './components/footer/Footer';
import './App.css'

class App extends React.Component {
  render(){
    return(
          <div className="App-Content">
              <Head />
              <Switch>
                <Route exact = {true} path="/" component={Home} />
                <Route path="/blog" component={BlogLanding} />
              </Switch>
              <Footer />
          </div>
    );
  }
}

export default App;
