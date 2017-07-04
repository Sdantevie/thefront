import React from 'react';
import './about.css';

export default class About extends React.Component {
    render(){
        return(
            <div className="aboutcontainer" id="about">
                <p className="about">
                 I'm a Software Developer Based in Port-Harcourt City, Nigeria. <br/> 
                 Some projects i've Worked on Include, this Site <img className="smileimage" src="./images/images.png" alt="Smiley"/> and Others. <br/>
                 I Currently Work in my Room!!
                </p>    
            </div>
        );
    }
}