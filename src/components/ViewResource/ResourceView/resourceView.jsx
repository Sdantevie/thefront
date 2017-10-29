import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

class ResourceView extends Component {
    constructor(props){
        super(props);
        this.editResource = this.editResource.bind(this);
    }

    editResource(){
        this.props.getId(this.props.data._id);
        let r = window.confirm('Are you Sure?');
        if(r){
            this.props.history.push('/create');
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
                        <i className="glyphicon glyphicon-edit" onClick={this.editResource}></i>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default withRouter(ResourceView);