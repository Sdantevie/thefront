import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProgressBar from 'react-progress-bar-plus'
import 'react-progress-bar-plus/lib/progress-bar.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: -1,
            loggedIn: false
        };
    }     
   
    //Ajax Call to get Authentication from the API
    componentDidMount(){
        this.setState({percent: 0});
        axios.post(
            'http://192.168.43.196:3001/api/authenticate',
            // 'http://localhost:3001/api/authenticate',
            // 'https://salty-shore-26799.herokuapp.com/api/authenticate',
             {
            name: 'theKingsBusiness'
        })
        .then((response) => {
            this.setState({percent: 100, loggedIn: true});
            NotificationManager.success('Welcome to the Student Resource Center by S. Daniel', 'Success');
            this.props.getToken(response.data.token);
        })
        .catch(error => {
            this.setState({percent: 100, loggedIn: false});
            NotificationManager.error('We\'re Setting things Up to give a Wonderful Experience, Please Facilitate the process by Reloading this page, thanks a Lot', 'Error');
        });
    }

    render(){
        console.log('hi');
        return (
            <div className="home">
                    <ProgressBar 
                    percent= {this.state.percent}
                    autoIncrement={true}
                    intervalTime={(Math.random()*1000)}
                    spinner= {'right'}/>
                <h1>Student Resource Center</h1>
                {/* if there's a response from the API the basic buttons for using the app is shown.*/}
                {this.state.loggedIn ?
                (<div>
                <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3 ">
                            <Link to='/views'>
                                <img src = './assets/images/download.png' alt='View Resource' className="img-responsive center-block leImage"/>
                                View All Resources/Students
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to='/create'>
                                <img src = './assets/images/images.png' alt='Add Resource' className="img-responsive center-block leImage"/>
                                Add New Resource
                            </Link>
                        </div>
                        <div className="col-lg-3"></div>
                </div></div>)
                : (<div></div>) }
                <NotificationContainer />
            </div>
        );
       
    }
}

export default Home;