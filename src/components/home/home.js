import React from 'react';
import './home.css'

export default class Home extends React.Component{
    render(){
        return (

           <div className="container">
               <div className="lePad jumbotron">
                <h1 className="leTitle" >Steven Daniel</h1>
                <h3 className="leSubtitle"><i>musician.   programmer.    savage.</i> </h3>
                 <p >
                 Hi, I'm a Software Developer Based in Port-Harcourt, Nigeria. <br/> 
                 I Currently Work at DropSoft. Wanna Reach Me?!! Go Here<br/>
                 <a href="https://twitter.com/_deemogul">
                    <img className="leImage" src="./images/icon_twitter_128.png" alt="Twitter"/>
                </a>
                <a href="https://instagram.com/_deemogul">
                    <img className="leImage" src="./images/icon_instagram_128.png" alt="Instagram"/>
                </a>
                <a href="https://instagram.com/_deemogul">
                    <img className="leImage" src="./images/icon_linkedin_128.png" alt="Instagram"/>
                </a>
                </p>
                </div>   
            </div>  
        );
    }
}