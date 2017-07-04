import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header  from './components/LandingPage/header/header';
import Home from './components/home/home';
import Container from './components/LandingPage/Container/container';
import About from './components/LandingPage/about/about';
import './App.css'

class App extends React.Component {

  render(){
    return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App-Content">
              <Header/>
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                </Switch>
              </BrowserRouter>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
