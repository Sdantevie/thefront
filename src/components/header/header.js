import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import AppBar from 'material-ui/AppBar';

class Head extends React.Component{
    render(){
         const navlink = (
            <div className="linkContainer">
                        <Link to='/' className="linking">Home</Link>
                        <Link to='/work' className="linking">Work</Link>
                        <Link to='/blog' className="linking">Blog</Link>
            </div>    
        );
        return(
            <AppBar
            title="S. Daniel"
            showMenuIconButton={false}
            style={{
                backgroundColor: 'transparent',
                position: 'fixed'
            }}
            titleStyle={{
                color: '#000000'
            }}
            iconElementRight={navlink}
            />
        );
    }
} 

export default Head
