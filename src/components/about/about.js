import React from 'react';
import './about.css';

export default class About extends React.Component {
    render(){
        return(
            <div className="aboutcontainer">
                <p className="about">
                 I'm a Software Developer Based in Port-Harcourt, Nigeria. <br/> 
                 Some projects i've Worked on Include, this Site <img className="smileimage" src="./images/images.png" alt="Smiley"/>, Drosas, and Others. <br/><br/>
                 I Currently Work in my Room!!
                </p>    
            </div>
        );
    }
}