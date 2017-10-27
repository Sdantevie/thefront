import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';
import Nav from '../Nav/nav';

class CreateResource extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            studentsName : '',
            school : '',
            course : '',
            subject : '',
            link : '',
            percent : -1
        };
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.id !== ''){
            this.setState({
                percent : 0
            });
            axios({method : 'get',
                // url : `http://localhost:3001/students/${this.props.id}`,
                    url : `http://192.168.43.196:3001/students/${this.props.id}`,
                    // url :`https://salty-shore-26799.herokuapp.com/students/${this.props.id}`,
                    headers : {
                    'x-access-token' : this.props.token 
                    }
                }).then(response => {
                    console.log(response.data);
                    this.setState({
                    data : response.data,
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
   
    componentWillUnmount(){
        console.log('here');
        if(this.props.id !== ''){
            console.log('inside');
            this.props.clearId()  //this will refresh the page
        }
    }

    handleInputChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
       
      }
    handleSubmit(){
        let data =  {
            name : this.state.studentsName,
            course : this.state.course,
            school : this.state.school,
            subject : this.state.subject,
            link : this.state.link,
            token : this.props.data.token
        };
        console.log(JSON.stringify(data));
        const r = window.confirm("Are you Sure");
       if(r){
           this.setState({
               percent : 0
           });
           axios.post(
               'http://192.168.43.196:3001/students',
            //    'http://localhost:3001/students',
            // 'https://salty-shore-26799.herokuapp.com/students',
            data 
           )
            .then( response => { 
                console.log(response.data);
                this.setState({
                    percent : 100
                });
                this.createNotification('success');
                // this.props.history.push('/');
            })
            .catch(err => { 
                console.log(err);
                this.setState({
                    percent : 100
                });
                this.createNotification('error');
                // this.props.history.push('/');
            })
       }
    }

    render(){
        console.log(this.state.percent);
        console.log(this.props.id);
        return (
            <div className="container">
                <ProgressBar 
                percent= {this.state.percent}
                autoIncrement={true}
                intervalTime={(Math.random() * 1000)}
                spinner= {'right'}/>
                <Nav switch={true}/>
                <h2>Add/Edit Student Resource</h2>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Student's Details</h3>
                </div>
                <div className="panel-body">
                    <div className="col-lg-6">
                        <span>Your Name</span>
                        <input type="text"
                         className="form-control"
                         placeholder="Name..."
                         name="studentsName"
                         onChange={this.handleInputChange}
                         value={this.state.studentsName}/>
                    </div>
                    <div className="col-lg-6">
                        <span>Your School</span>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Institution..."
                        name="school"
                        onChange={this.handleInputChange}
                        value={this.state.school}
                        />
                    </div>
                    <div className="col-lg-12"><br/></div>
                    <div className="col-lg-6">
                        <span>Your Specialization</span>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Course of Study..."
                        name="course"
                        onChange={this.handleInputChange}
                        value={this.state.course}/>
                    </div>
                </div>
          </div>
          <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Resources' Details</h3>
                </div>
                <div className="panel-body">
                    <div className="col-lg-6">
                            <span>Resource Subject</span>
                            <input type="text"
                            className="form-control" 
                            placeholder="Subject.."
                            name="subject"
                            onChange={this.handleInputChange}
                            value={this.state.subject}/>
                            <span>Link</span>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Link to Resource..."
                            name="link"
                            onChange={this.handleInputChange}
                            value={this.state.link}/>
                    </div>
                </div>
          </div>
          <button type="button"
                  className="btn btn-success"
                  onClick={this.handleSubmit}>Submit</button>
          </div>
        );
    }
}

export default withRouter(CreateResource);