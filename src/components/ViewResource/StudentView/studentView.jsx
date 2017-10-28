import React,  { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../views.css';

class StudentView extends Component {
    constructor(props){
        super(props);
        this.clicking=this.clicking.bind(this);
        this.editClick=this.editClick.bind(this);
        this.deleteClick=this.deleteClick.bind(this);
    }

    clicking() {
       this.props.getName(this.props.data.name);
    }

    editClick(){
        this.props.getId(this.props.data._id);
        let r = window.confirm('Are you Sure?');
        if(r){
            this.props.history.push('/create');
        }
    }
    deleteClick ()  {
       let r = window.confirm('Are you Sure');
       if(r) {
           axios({
               method : 'post',
               data : {
                    name: "",
                    school: "",
                    course: "",
                    subject: this.props.data.subject,
                    link: this.props.data.link,
               },
               url : `http://192.168.43.196:3001/students/${this.props.data._id}`,
               headers : {
                'x-access-token' : this.props.token 
                }
            }).then(response => {
              NotificationManager.success('The Resource has been deleted Successfully', 'Success');
              this.props.history.push('/views');
            }).catch((err) => {
                NotificationManager.error('For some weird reason, that didn\'t work, please try again', 'Error');
            });
       }
    }
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="content">
                        Name : {this.props.data.name} <br/>
                        School : {this.props.data.school} <br/>
                        Specialization : {this.props.data.course}
                    </div>
                    <div className="features">
                        <Link to="/views" onClick={this.clicking}>View Resources Added by {this.props.data.name}</Link>
                        <i className="glyphicon glyphicon-trash" onClick={this.deleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.editClick}></i>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default withRouter(StudentView);