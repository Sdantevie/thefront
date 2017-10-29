import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

class ResourceView extends Component {
    constructor(props){
        super(props);
        this.editResource = this.editResource.bind(this);
        this.deleteResource = this.deleteResource.bind(this);
    }

    editResource(){
        this.props.getId(this.props.data._id);
        let r = window.confirm('Are you Sure?');
        if(r){
            this.props.history.push('/create');
        }
    }
    deleteResource ()  {
        let r = window.confirm('Are you Sure');
        if(r) {
            axios({
                method : 'delete',
                url : `http://salty-shore-26799.herokuapp.com/students/${this.props.data._id}`,
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
            <div className="panel panel-success">
                <div className="panel-body">
                    <div className="content">
                        Subject :{this.props.data.subject} <br/>
                        Link: <a href={this.props.data.link}>{this.props.data.link}</a>
                    </div>
                    <div className="features">
                        <span>This resource was added by {this.props.data.name || 'Anonymous'}</span>
                        <i className="glyphicon glyphicon-trash" onClick={this.deleteResource}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.editResource}></i>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default withRouter(ResourceView);