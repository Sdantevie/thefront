import React from 'react';
import axios from 'axios';
import './blog.css';

export default class BlogLanding extends React.Component{
    constructor() {
        super();
        this.state = {
            post : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/articles/59be4089910fd73cd2ca45c5')
        .then((res) => {
            console.log(res);
            const post = res;
            this.setState({post});
        }).catch((err) => {
            console.log(err);
        });
    }

    render(){
        return(
            <div>
                <h1> {this.state.post.author} </h1>
            </div>
        )
    }
}
