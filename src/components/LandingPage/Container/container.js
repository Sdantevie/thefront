import React from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

export default class Container extends React.Component {
    render(){
        return(
            <div>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
