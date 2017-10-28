import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import CreateResource from './components/CreateResource/createResource';
import ViewResource from './components/ViewResource/Views';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            token : "",
            id : "",
            name : "",
        };
        this.getToken = this.getToken.bind(this);
        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.clearId = this.clearId.bind(this);
        this.clearName =this.clearName.bind(this);
    }
   
    getToken(token){
        this.setState({token : token});
    };

    getId(id){
        console.log('i got the id');
        this.setState({id : id});
    }

    getName (name)  {
        this.setState({name : name});
    }

    clearId(){
        this.setState({ id: ''});
    }

    clearName(){
        this.setState({name : ''});
    }

   
    render() {
        return ( 
        <div className="container">
            <Switch>
                <Route exact = {true} path="/" render={() => <Home getToken={this.getToken}/>}/>
                <Route path="/create" render={() => <CreateResource 
                                                        token={this.state.token} 
                                                        clearId={this.clearId}  
                                                        id={this.state.id} />} />
                <Route path="/views" render={() => <ViewResource 
                                                    token={this.state.token} 
                                                    getId={this.getId} 
                                                    getName={this.getName} 
                                                    clearName={this.clearName} 
                                                    name={this.state.name}/>}/>
              </Switch>
              <Footer/>
        </div>
        );
    }
}

export default App;