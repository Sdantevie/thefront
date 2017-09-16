import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header  from './components/header/Header';
import home from './components/home/Home';
import blogLanding from './components/blog/BlogLanding';
import Footer from './components/footer/Footer';
import './App.css'

class App extends React.Component {
  render(){
    return(
          <div className="App-Content">
              <Header />
              <Switch>
                <Route exact = {true} path="/" component={home} />
                <Route path="/blog" component={blogLanding} />
              </Switch>
              <Footer />
          </div>
    );
  }
}

export default App;
