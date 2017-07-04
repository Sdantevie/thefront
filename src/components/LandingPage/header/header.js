import React from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import './header.css';
import AppBar from 'material-ui/AppBar';

class Head extends React.Component{
    render(){
         const navlink = (
            <div className="linkContainer">
                <BrowserRouter>
                    <div>
                        <Link to='/' className="linking">Home</Link>
                        <Link to='/about' className="linking">About</Link>
                        <Link to='/blog' className="linking">Blog</Link>
                        <Link to='/contact' className="linking">Contact</Link>
                    </div>
                </BrowserRouter>
            </div>    
        );
        return(
            <AppBar
            title="S. Daniel"
            showMenuIconButton={false}
            style={{
                backgroundColor: '#ffffff',
                position: 'fixed'
            }}
            titleStyle={{
                color: '#000000',
            }}
            iconElementRight={navlink}
            />
        );
    }
} 

export default withRouter(Head)
