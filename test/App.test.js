import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Head from '../src/components/header/Header';
import { Switch, Route } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Footer from '../src/components/footer/Footer';
import BlogLanding from '../src/components/blog/BlogLanding';
import App from '../src/App';

describe('Component: App', () => {
    it('renders well', () => {
        expect(shallow(<App />).length).to.equal(1);
    });

    it('renders Header, Switch and Footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsAllMatchingElements([
            <Head />,
            <Switch>
                <Route exact = {true} path="/" component={Home} />
                <Route path="/blog" component={BlogLanding} />
            </Switch>,
            <Footer />
        ])).to.equal(true);
    });
});