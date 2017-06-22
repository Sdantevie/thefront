import React from 'react';
import './header.css';
import AppBar from 'material-ui/AppBar';

class Head extends React.Component{
    render(){
        const navlinks = (
            <div className="linkContainer">
                <a className="linking" href="">Home</a>
                <a className="linking" href="#about">About</a>
                <a className="linking" href="">Blog</a>
                <a className="linking" href="#contact">Contact</a>
            </div>    
        );
        const navLinksStyle={
                
            }
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
            iconElementRight={navlinks}
            iconStyleRight={navLinksStyle}
            />
        );
    }
} 

export default Head
