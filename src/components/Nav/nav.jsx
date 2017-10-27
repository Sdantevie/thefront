import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
    render(){
        return (
           <div role="navigation" className="nav navbar-default navv">
               <ul className="nav horizon">
                    <Link to='/'>
                        <img src = './assets/images/home.png' alt='Home' className="hom"/>
                    </Link>
                    {this.props.switch ? (<Link to='/views'>
                                            <img src = './assets/images/download.png' alt='View Resource' className="image"/>
                                          </Link>) 
                                        : (
                                            <Link to='/create'>
                                                <img src = './assets/images/images.png' alt='Add Resource' className="image"/>
                                            </Link>
                                        ) }
                 </ul>
           </div>
        );
    }
}

export default Nav;