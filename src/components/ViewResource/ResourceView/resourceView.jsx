import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
                url : `http://192.168.43.196:3001/students/${this.props.data._id}`,
                headers : {
                 'x-access-token' : this.props.token 
                 }
             }).then(response => {
               this.props.history.push('/views');
             }).catch((err) => {
                 console.log(err);
             });
        }
     }
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-body">
                    <div className="content">
                        Subject :{this.props.data.subject} <br/>
                        Link: {this.props.data.link}
                    </div>
                    <div className="features">
                        <span>This resource was added by {this.props.data.name || 'Anonymous'}</span>
                        <i className="glyphicon glyphicon-trash" onClick={this.deleteResource}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.editResource}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResourceView);