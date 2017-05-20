import React from 'react';
import './header.css';
import AppBar from 'material-ui/AppBar';

class Head extends React.Component{
    render(){
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
            />
        );
    }
} 

export default Head
