import React,  { Component } from 'react';
import StudentView from './StudentView/studentView';
import ResourceView from './ResourceView/resourceView';
import Nav from '../Nav/nav';
import { withRouter} from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ProgressBar from 'react-progress-bar-plus';
import 'react-notifications/lib/notifications.css';
import 'react-progress-bar-plus/lib/progress-bar.css';
import axios from 'axios';


class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent : -1,
            studentResource : []
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        //fetches all Student/Resource on Mounting
        this.setState({
            percent : 0
        });
        axios({method : 'get',
                // url : 'http://localhost:3001/students',
                // url : 'http://192.168.43.196:3001/students',
                url : 'https://salty-shore-26799.herokuapp.com/students',
                headers : {
                'x-access-token' : this.props.token 
                }
            }).then(response => {
                this.setState({
                    studentResource : response.data,
                    percent : 100
                });
            }).catch((err) => {
                console.log(err);
                this.setState({
                    percent : 100
                });
            });
    }

    // this is called when the Go Back button is pressed so as to clear the name.
    onClick(){
        this.props.clearName();
        this.props.history.push('/views');
    }
   
    shouldComponentUpdate(){
        return this.props.data !== '';
    }
    componentDidUpdate(nextProps){
        if(nextProps.name !== this.props.name){ // this condition will break the infinite loop caused by the setState in this hook
            console.log('making the call');
            axios({method : 'get',
            // url : 'http://localhost:3001/students',
                url : `http://salty-shore-26799.herokuapp.com/students/${ this.props.name !== '' ? `get/${this.props.name}` : '' }`,
                headers : {
                'x-access-token' : this.props.token 
                }
            }).then(response => {
                this.setState({
                    studentResource : response.data,
                    percent : 100
                });
            }).catch((err) => {
                console.log(err);
                this.setState({
                    percent : 100
                });
            });
        }
    }

  

    render(){
        console.log(this.props.name);
        // the condition here will ensure that state containing Students/Resources is not Empty
        let view = (typeof this.state.studentResource !== 'undefined' && this.state.studentResource.length > 0) ?
         this.state.studentResource.map((item) => {
            return (
                //A resource View is Used to render any Resource that does not have a Student attached to it.
                item.name !== '' ? <StudentView key={item._id} token={this.props.token} data={item} getName={this.props.getName} getId={this.props.getId} /> 
                 : <ResourceView key={item._id} onDeleteClick={this.deleteClick} data={item} getId={this.props.getId} /> 
            );
        }) : ( <div className="jumbotron">{this.state.percent == 100 ? 
            'There is No Student/Resource in the database at the Moment, please click on the Add resource Icon Create a Resource' 
            : 'Please Wait While we Retrieve the Student/Resources'}</div>);

        //View for Resources added by a student 
        let view2 = (typeof this.state.studentResource !== 'undefined' && this.state.studentResource.length > 0) ? this.state.studentResource.map((item) => {
            return (
                <ResourceView key={item._id} onDeleteClick={this.deleteClick} data={item} getId={this.props.getId} /> 
            );
        }) : ( <div className="jumbotron">{this.state.percent == 100 ? 
            'There is No Student/Resource in the database at the Moment, please click on the Add resource Icon Create a Resource' 
            : 'Please Wait While we Retrieve the Student/Resources'}</div>);
        
        return (
            <div>
                 <ProgressBar 
                percent= {this.state.percent}
                autoIncrement={true}
                intervalTime={(Math.random() * 1000)}
                spinner= {'right'}/>
                <Nav  switch = {false}/>
                <br />
                {this.props.name !== '' ? view2 : view }
                {this.props.name !== '' ? (<button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Go Back</button>) : (<div></div>)}
            </div>
        );
    }
}

export default withRouter(View);