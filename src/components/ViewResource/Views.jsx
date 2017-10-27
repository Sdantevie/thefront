import React,  { Component } from 'react';
import StudentView from './StudentView/studentView';
import ResourceView from './ResourceView/resourceView';
import Nav from '../Nav/nav';
import { withRouter} from 'react-router-dom';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import axios from 'axios';


class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent : -1,
            studentResource : []
        }
    }

    componentDidMount() {
        this.setState({
            percent : 0
        });
        axios({method : 'get',
            // url : 'http://localhost:3001/students',
                url : 'http://192.168.43.196:3001/students',
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
   

    componentDidUpdate(nextProps){
       nextProps.name !== this.props.name ? 
       axios({method : 'get',
       // url : 'http://localhost:3001/students',
           url : `http://192.168.43.196:3001/students/get/${this.props.name}`,
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
       })
       : console.log('no where');

    }

    render(){
        let view = (typeof this.state.studentResource !== 'undefined' && this.state.studentResource.length > 0) ? this.state.studentResource.map((item) => {
            return (
                item.name !== '' ? <StudentView key={item._id} token={this.props.token} data={item} getName={this.props.getName} getId={this.props.getId} /> 
                 : <ResourceView key={item._id} onEditClick={this.editClick} onDeleteClick={this.deleteClick} data={item} /> 
            );
        }) : ( <div className="jumbotron">There was an Error Retrieving Resources, please Visit the Home Page</div>);
        
        return (
            <div>
                 <ProgressBar 
                percent= {this.state.percent}
                autoIncrement={true}
                intervalTime={(Math.random() * 1000)}
                spinner= {'right'}/>
                <Nav  switch = {false}/>
                <br />
                {view}
            </div>
        );
    }
}

export default withRouter(View);