import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header  from './components/header/header';
import Home from './components/home/home';
import './App.css'

class App extends React.Component {

  render(){
    return(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App-Content">
              <Header/>
              <Switch>
                <Route exact = {true} path="/" component={Home}/>
              </Switch>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
