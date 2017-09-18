import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../src/components/home/Home';

describe('Component: Home', () => {
    it('renders without exploding', () => {
        expect(
            shallow(
                <Home/>
            ).length
        ).to.equal(1);
    });
});