import React from 'react';
import { Link } from 'react-router-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Head from '../src/components/header/Header';

describe('Component: Head', () => {
    // Check that it Renders
    it('renders without explosion', () => {
        expect(
            shallow(
                <Head/>
            ).length
        ).to.equal(1);
    });
    // Check that the Nav Links are Present
    it('contains the nav Links', () => {
        const wrapper = shallow(<Head />);
        expect(wrapper.find('li')).to.have.length(3);
    });
});
