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
   
    /**
     * @param {string} token
     * This function is passed as a Prop to the Home Component 
     * in order retrieve the Token acquired by the Home Component for use 
     * in other Components
     */
    getToken(token){
        this.setState({token : token});
    };

    /** 
     * @param {string} id
     * This function is passed as Props to the ViewResource Component 
     * in order retrieve the id of the particular Student/Resource selected by the user
     * to be used by the CreateResource Component for the editing of Student/Resource  
     */
    getId(id){
        this.setState({id : id});
    }

    /**
     * @param {string} name
     *  This function is passed as Props to the ViewResource Component 
     * in order retrieve the name of the particular Student/Resource selected by the user
     * to be used by the ViewResource Component for the Viewing of Resources added by
     * the selected  Student
     */
    getName (name)  {
        this.setState({name : name});
    }
    /**
     * This function is passed as Props to the CreateResource Component 
     * in order clear the id that was given to it so that on remounting, 
     * the Component will be available for Adding of Resource
     *  as well as editing of Resource 
     */
    clearId(){
        this.setState({ id: ''});
    }

    /**
     * 
     * This function is passed as Props to the ViewResource Component 
     * in order to clear the name given to it so that it on updating it 
     * looks new to serve other Purposes
     */
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