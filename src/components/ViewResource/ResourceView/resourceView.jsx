import React,  { Component } from 'react';

class ResourceView extends Component {
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
                        <i className="glyphicon glyphicon-trash" onClick={this.props.onDeleteClick}></i>
                        <i className="glyphicon glyphicon-edit" onClick={this.props.onEditClick}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResourceView