import React from 'react';
import './contact.css';

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contactcontainer" id="contact">
                <p className="contact">
                    Wanna Reach Me? Go Here <br/>
                </p>
                <a className="contactpoint" href="https://twitter.com/_deemogul"><img src="./images/twitter.svg" alt="Twitter"/></a>
                <a className="contactpoint" href="https://plus.google.com/u/0/"><img src="./images/gplus.svg" alt="Google+"/></a>
                <a className="contactpoint" href="https://instagram.com/_deemogul"><img src="./images/instagram.svg" alt="Instagram"/></a>
            </div>
        );
    }
}