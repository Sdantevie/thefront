import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header  from './components/header/header';
import About from './components/about/about';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
            <div className="App-header">
              <Header/>
            </div>
            <div className="App-Content">
              <Home/>
            </div>
            <div className="laPimp">
              <About/>
              <Contact/>
              <Footer/>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
