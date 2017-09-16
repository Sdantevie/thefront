import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Head extends React.Component {
    render() {
        return(
         <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                <a className="navbar-brand" href="#">S. Daniel</a>
            </div>
            <div className="collapse navbar-collapse head">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/work' >Work</Link></li>
                    <li><Link to='/blog' >Blog</Link></li>
                </ul>
            </div>
        </div>
    </nav>
        );
    }
}

export default Head